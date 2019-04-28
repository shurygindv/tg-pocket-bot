import Telegraf, {
    ContextMessageUpdate,
    Middleware,
    Composer,
    HearsTriggers,
} from 'telegraf';
import {injectable} from 'inversify';
import {MessageSubTypes} from 'telegraf/typings/telegram-types';

import {ENV} from '../../config/env';

@injectable()
export class TelegramApi implements TelegramApi {
    private telegraf: Telegraf<ContextMessageUpdate>;

    public constructor() {
        this.telegraf = new Telegraf(ENV.BOT_TOKEN as string);
    }

    public get core(): Telegraf<ContextMessageUpdate> {
        return this.telegraf;
    }

    public async launch(): Promise<void> {
        await this.core.launch();
    }

    public hears(
        triggers: HearsTriggers,
        middleware: Middleware<ContextMessageUpdate>,
    ): Composer<ContextMessageUpdate> {
        return this.core.hears(triggers, middleware);
    }

    public help(
        middleware: Middleware<ContextMessageUpdate>,
    ): Composer<ContextMessageUpdate> {
        return this.core.help(middleware);
    }

    public start(
        middleware: Middleware<ContextMessageUpdate>,
    ): Composer<ContextMessageUpdate> {
        return this.core.start(middleware);
    }

    public on(
        key: MessageSubTypes,
        middleware: Middleware<ContextMessageUpdate>,
    ): Composer<ContextMessageUpdate> {
        return this.core.on(key, middleware);
    }
}
