<?php
echo <<<DOJO_CONFIG
var dojoConfig = {
    baseUrl: './',
    parseOnLoad: true,
    packages: [
        {
            'name': 'dojo',
            'location': 'deploy/dojo'
        },
        {
            'name': 'dijit',
            'location': 'deploy/dijit'
        },
        {
            'name': 'lib',
            'location': 'deploy/lib'
        }
    ],

    has: {
        'dojo-firebug': false,
        'dojo-debug-messages': true
    }
};
DOJO_CONFIG;
