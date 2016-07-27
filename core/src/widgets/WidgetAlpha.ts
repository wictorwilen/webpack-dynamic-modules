import {IWidget} from '../lib/IWidget'
import {Logger} from '../lib/Logger'
import * as $ from 'jquery'
export class WidgetAlpha implements IWidget {
    render(): string {
        new Logger().log('Rendering Widget Alpha');
        $("body").css("font-family", "Comic Sans");
        return "Widget Alpha";
    }
}
