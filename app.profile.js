var profile = {
    'basePath'      : './',
    'releaseDir'    : './deploy',
    'version'       : 'v1',
    'action'        : 'release',
    'optimize'      : '',
    'layerOptimize' : '',
    'selectorEngine': 'lite',

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
            name: 'dojox',
            location: 'bower_components/dojox'
        },
        {
            name: 'lib',
            location: 'lib'
        }
    ],

    resourceTags: {
        amd: function(filename, mid) {
            return /\.js$/.test(filename);
        }
    },

    'layers': {
        'deploy/boom': {
            'include': [
                'lib/dialog-test'
            ],
            amd: true
        }
    }
};
