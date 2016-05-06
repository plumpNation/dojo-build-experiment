var profile = {
    'basePath'      : './',
    'releaseDir'    : './deploy',
    'version'       : 'v1',
    'action'        : 'release',
    'optimize'      : '',
    'layerOptimize' : '',
    'selectorEngine': 'lite',
    'mini'          : true,

    staticHasFeatures: {
        'dojo-firebug': 0,
        'dijit-legacy-requires': 0
    },

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
            name: 'lib',
            location: 'lib'
        }
    ],

    resourceTags: {
        amd: function(filename, mid) {
            return /\.js$/.test(filename);
        },

        copyOnly: function (filename, mid){
            var list = {
                'app.profile': true,
                'package.json': true
            };

            return (mid in list);
        }
    },

    'layers': {
        'dojo/dojo': {
            boot: true
        },

        'lib/dialog-dependencies': {
            'includes': [
                'dojo/parser',
                'dojo/ready'
            ],
            'layerDependencies': [
                'dojo/dojo'
            ]
        }
    }
};
