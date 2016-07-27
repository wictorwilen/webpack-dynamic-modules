/// <reference path="../typings/webpack-dynamic-modules.d.ts" />

import {IWidget} from 'webpack-dynamic-modules/src/lib/IWidget'

export class ExternalWidget implements IWidget {
    render(): string {
        return "External Widget is here!"
    }
}