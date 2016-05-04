<?php
echo <<<DOJO_CONFIG
var dojoConfig = {
    parseOnLoad: true,

    packages: [
        {
            'name': 'deploy',
            'location': '../'
        }
    ],
    has: {
        'dojo-firebug': false,
        'dojo-debug-messages': true
    }
};
DOJO_CONFIG;
