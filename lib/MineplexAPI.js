var log      = require('frozor-logger');
var request  = require('request');

var config   = require('./../config/config');

class MineplexAPI{
    constructor(apikey){
        this._key = apikey;
        this._url = config.base_url;
        this.get = {
            server: (callback)=>{
                request({url: this.getRequestUrl(`server`), json: true}, (err, res, body)=>{
                    if(err) return callback(false, err);

                    if(res.statusCode != 200 || body.statusCode) return callback(false, body);

                    return callback(true, body);
                });
            },
            player: {
                info: (username, callback)=>{
                    request({url: this.getRequestUrl(`player`, `${username}`), json: true}, (err, res, body)=>{
                        if(err) return callback(false, err);

                        if(res.statusCode != 200 || body.statusCode) return callback(false, body);

                        return callback(true, body);
                    });
                },
                status: (username, callback)=>{
                    request({url: this.getRequestUrl(`player.status`, `${username}/status`), json: true}, (err, res, body)=>{
                        if(err) return callback(false, err);

                        if(res.statusCode != 200 || body.statusCode) return callback(false, body);

                        return callback(true, body);
                    });
                },
                friends: (username, callback)=>{
                    request({url: this.getRequestUrl(`player.friends`, `${username}/friends`), json: true}, (err, res, body)=>{
                        if(err) return callback(false, err);

                        if(res.statusCode != 200 || body.statusCode) return callback(false, body);

                        return callback(true, body);
                    });
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