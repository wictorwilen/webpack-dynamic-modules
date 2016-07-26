///<reference path="../../typings/index.d.ts" />
import {IWidget} from './IWidget';
import {WidgetLoader} from './loader';

export module main {
    'use strict';
    System.config({
        baseUrl: "/",
        map: {
            "jQuery": "https://code.jquery.com/jquery-1.10.2.js",
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
        }
    ];

    widgets.forEach(widget => {
       System.import(widget.file + ".js").then((scope) => {
            var loader = new WidgetLoader(scope);
            var w = loader.getInstance(widget.class, null);
            console.log(w.render());
        });
    });
}