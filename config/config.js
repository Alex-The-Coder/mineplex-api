module.exports = {
    base_url: 'http://api.mineplex.com/pc/',
    routes: {
        server: {
            url: 'server'
        },

        //Player endpoints
        player: {
            url: 'player/'
        },
        'player.status': {
            url: 'player/'
        },
        'player.friends': {
            url: 'player/'
        },

        //Amplifier endpoints
        amplifierGroup: {
            url: 'amplifierGroup'
        },
        amplifier: {
            url: 'amplifier'
        },
        'amplifier.specific': {
            url: 'amplifier/'
        },

        //Fountain endpoints
        fountain:{
            url: 'fountain'
        },

        //Network endpoints
        network:{
            url: 'network'
        },
        'network.us':{
            url: 'network/US'
        },
        'network.eu':{
            url: 'network/EU'
        },
        'network.us.server':{
            url: 'network/US/'
        },
        'network.eu.server':{
            url: 'network/EU/'
        }
    }
};