module.exports = {
    base_url: 'http://api.mineplex.com:8081/',
    routes: {
        server: {
            url: 'server',
            token: false
        },
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
        }
    }
};