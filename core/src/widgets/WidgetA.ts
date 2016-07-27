import {IWidget} from '../lib/IWidget'
import {Logger} from '../lib/Logger'
import * as $ from 'jquery'
export class WidgetA implements IWidget {
    render(): string {
        new Logger().log('Rendering Widget A');
        $("body").css("background-color", "pink");
        return "Widget A";
    }
}


export class WidgetA2 implements IWidget {
    render(): string {
        new Logger().log('Rendering Widget A2');
        $("body").css("font-size", "200%");
        return "Widget A2";
    }
}
