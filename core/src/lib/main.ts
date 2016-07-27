///<reference path="../../typings/index.d.ts" />
import {IWidget} from './IWidget';
import {WidgetLoader} from './loader';

export module main {
    'use strict';
    System.config({
        baseUrl: "/",
        map: {
        }
    });
    var widgets = [
        {
            file: 'WidgetA',
            class: 'WidgetA'
        },
        {
            file: 'WidgetB',
            class: 'WidgetB'
        },
        {
            file: 'ExternalWidget',
            class: 'ExternalWidget'
        }
    ];

    widgets.forEach(widget => {
       System.import(widget.file + ".js").then((scope) => {
            var loader = new WidgetLoader(scope);
            var w = loader.getInstance(widget.class, null);
            if(typeof w !== 'undefined') {
                console.log(w.render());
            }
        }, (error) => {
            console.log(`Widget loading error: ${error}`);
        });
    });
}