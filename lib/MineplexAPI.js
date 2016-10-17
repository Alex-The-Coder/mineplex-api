var log      = require('frozor-logger');
var request  = require('request');

var config   = require('./../config/config');

class MineplexAPI{
    constructor(apikey){
        this._key = apikey;
        this._url = config.base_url;

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
            server: (callback)=>{this.sendRequest(callback, `server`);},
            player: {
                info: (username, callback)=>{this.sendRequest(callback, `player`, username);},
                status: (username, callback)=>{this.sendRequest(callback, `player.status`, `${username}/status`);},
                friends: (username, callback)=>{this.sendRequest(callback, `player.friends`, `${username}/friends`);}
            },
            amplifierGroup: (callback)=>{this.sendRequest(callback, `amplifierGroup`);},
            amplifier: {
                all: (callback)=>{this.sendRequest(callback, `amplifier`)},
                specific: (group, callback)=>{this.sendRequest(callback, `amplifier.specific`, group)}
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
        route = config.routes[route];

        extra = extra || ``;
        var request_url = `${this.getBaseUrl()}${route.url}${extra}`;
        if(route.token == true){
            request_url += `?apiKey=${this.getApiKey()}`;
        }
        return request_url;
    }
}

module.exports = MineplexAPI;