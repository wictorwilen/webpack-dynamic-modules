import {IWidget} from './IWidget';

export class WidgetLoader {
    constructor(private context: Object) {
    }
    getInstance(name: string, ...args: any[]): IWidget {
        try {
            var instance = Object.create(this.context[name].prototype);
            instance.constructor.apply(instance, args);
            return <IWidget>instance;
        }
        catch (error) {
            console.log(`Unable to create widget: ${error}`);
        }
    }
}