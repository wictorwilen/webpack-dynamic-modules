import {IWidget} from '../lib/IWidget'
import {Logger} from '../lib/Logger'
import * as $ from 'jquery'

export class WidgetB implements IWidget {
    render(): string {
        new Logger().log('Rendering Widget B');
        $("body").css("color", "navy");
        return "Widget B";
    }
} 