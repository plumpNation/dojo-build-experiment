require([
    'dojo/_base/declare',
    'dojo/parser',
    'dojo/ready',
    'dijit/_WidgetBase',
], function(declare, parser, ready, _WidgetBase){
    declare('Clock', [_WidgetBase], {
        templateString: '<h1>Clock</h1>'
        // put methods, attributes, etc. here
    });

    ready(function(){
        // Call the parser manually so it runs after our widget is defined,
        // and page has finished loading
        // parser is required by _TemplateMixin also
        parser.parse();
    });
});
