module.exports = {
    base_url: 'http://api.mineplex.com/pc/',
    routes: {
        server: {
            url: 'server',
            token: true
        },

        //Player endpoints
        player: {
            url: 'player/',
            token: true
        },
        'player.status': {
            url: 'player/',
            token: true
        },
        'player.friends': {
            url: 'player/',
            token: true
        },

        //Amplifier endpoints
        amplifierGroup: {
            url: 'amplifierGroup',
            token: true
        },
        amplifier: {
            url: 'amplifier',
            token: true
        },
        'amplifier.specific': {
            url: 'amplifier/',
            token: true
        },

        //Fountain endpoints
        fountain:{
            url: 'fountain',
            token: true
        },

        //Network endpoints
        network:{
            url: 'network',
            token: true
        },
        'network.us':{
            url: 'network/US',
            token: true
        },
        'network.eu':{
            url: 'network/EU',
            token: true
        },
        'network.us.server':{
            url: 'network/US/',
            token: true
        },
        'network.eu.server':{
            url: 'network/EU/',
            token: true
        }
    }
};