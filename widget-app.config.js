var dojoConfig = {
    baseUrl    : './',
    async      : true,

    packages: [
        {
            'name': 'dojo',
            'location': 'bower_components/dojo'
        },
        {
            'name': 'dijit',
            'location': 'bower_components/dijit'
        },
        {
            'name': 'modules',
            'location': 'modules'
        }
    ],

    has: {
        'dojo-firebug': false,
        'dojo-debug-messages': true
    }
};
