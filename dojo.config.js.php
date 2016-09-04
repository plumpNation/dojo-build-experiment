<?php
echo <<<DOJO_CONFIG
var dojoConfig = {
    baseUrl: './',
    parseOnLoad: true,
    packages: [
        {
            'name': 'dojo',
            'location': 'vendors/dojo'
        },
        {
            'name': 'dijit',
            'location': 'vendors/dijit'
        },
        {
            'name': 'lib',
            'location': 'lib'
        }
    ],

    has: {
        'dojo-firebug': false,
        'dojo-debug-messages': true
    }
};
DOJO_CONFIG;
