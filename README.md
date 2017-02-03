# mineplex-api
Light and quick wrapper for the Mineplex API.

```
var config = require('./config');
var MineplexAPI = require('mineplex-api');
var api = new MineplexAPI(config.token);

api.get.player.info('Artix', (err, res)=>{
  if(err) return console.log('Unable to get player info for Artix: ' + err);
  
  console.log(JSON.stringify(res));
});
```

#Installation

`$ npm install mineplex-api`

#Supported Endpoints

* Player info, status, and friends
* Amplifier groups, current queues
* Brawl fountain status
* Network status, and region/server specific status

#Usage

All endpoints use the callback model (err, res).

Endpoints are stored in the `get` object inside the api. For instance, to call player.info you would be calling `api.get.player.info`.
