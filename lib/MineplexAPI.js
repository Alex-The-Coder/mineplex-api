let request  = require('request');

let config   = require('./../config/config');

class MineplexAPI{
    constructor(apikey){
        this._key   = apikey;
        this._url   = config.base_url;

        this.defaultHandler = (callback, err, res, body)=>{
            if(err) return callback(false, err);

            if(res.statusCode != 200 || body.statusCode) return callback(false, body);

            return callback(true, body);
        };

        this.sendRequest = (callback, route, extra)=>{
            request({url: this.getRequestUrl(route, extra), json: true}, (err, res, body)=>{
                this.defaultHandler(callback, err, res, body);
            });
        };

        this.get = {
            //server: (callback)=>{this.sendRequest(callback, `server`);},
            player: {
                info:    (username, callback)=>{this.sendRequest(callback, `player`, username);},
                status:  (username, callback)=>{this.sendRequest(callback, `player.status`, `${username}/status`);},
                friends: (username, callback)=>{this.sendRequest(callback, `player.friends`, `${username}/friends`);}
            },
            amplifierGroup: (callback)=>{this.sendRequest(callback, `amplifierGroup`);},
            amplifier: {
                all:      (callback)=>{this.sendRequest(callback, `amplifier`)},
                specific: (group, callback)=>{this.sendRequest(callback, `amplifier.specific`, group)}
            },
            fountain: (callback)=>{this.sendRequest(callback, `fountain`);},
            network:{
                status: (callback)=>{this.sendRequest(callback, 'network')},
                us: {
                    status: (callback)=>{this.sendRequest(callback, 'network.us')},
                    server: (server, callback)=>{this.sendRequest(callback, `network.us.server`, server)}
                },
                eu: {
                    status: (callback)=>{this.sendRequest(callback, 'network.eu')},
                    server: (server, callback)=>{this.sendRequest(callback, `network.eu.server`, server)}
                }
            }
        }
    }

    getApiKey(){
        return this._key;
    }

    getBaseUrl(){
        return this._url;
    }

    getRequestUrl(route, extra){
        extra = extra || ``;

        route = config.routes[route];

        return `${this.getBaseUrl()}${route.url}${extra}?apiKey=${this.getApiKey()}`;
    }

    addEndpoint(endpointName, url, getRoute, process){
        config.routes[endpointName] = {
            url: url
        };

        let route  = getRoute.split('.');
        let apiObj = this.get;

        for(let i = 0; i < route.length; i++){
            if(!apiObj[route[i]]) apiObj[route[i]] = {};

            if(i == route.length-1){
                apiObj[route[i]] = process;
                break;
            }else apiObj = apiObj[route[i]];
        }
    }
}

module.exports = MineplexAPI;