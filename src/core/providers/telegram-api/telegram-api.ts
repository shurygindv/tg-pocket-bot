import Telegraf, {
    ContextMessageUpdate,
    Middleware,
    Composer,
    HearsTriggers,
} from 'telegraf';
import {injectable} from 'inversify';

import {ENV} from '../../../config/env';
import {CtxMessageUpdate, MessageSubTypes} from './telegram-api.interface';

@injectable()
export class TelegramApi implements TelegramApi {
    private telegraf: Telegraf<ContextMessageUpdate>;

    public constructor() {
        this.telegraf = new Telegraf(ENV.BOT_TOKEN as string);
    }

    public get core(): Telegraf<CtxMessageUpdate> {
        return this.telegraf;
    }

    public async launch(): Promise<void> {
        await this.core.launch();
    }

    public hears(
        triggers: HearsTriggers,
        middleware: Middleware<CtxMessageUpdate>,
    ): Composer<CtxMessageUpdate> {
        return this.core.hears(triggers, middleware);
    }

    public help(
        middleware: Middleware<CtxMessageUpdate>,
    ): Composer<ContextMessageUpdate> {
        return this.core.help(middleware);
    }

    public start(
        middleware: Middleware<CtxMessageUpdate>,
    ): Composer<CtxMessageUpdate> {
        return this.core.start(middleware);
    }

    public on(
        key: MessageSubTypes,
        middleware: Middleware<CtxMessageUpdate>,
    ): Composer<CtxMessageUpdate> {
        return this.core.on(key, middleware);
    }

    public command(
        cmd: string,
        middleware: Middleware<CtxMessageUpdate>,
    ): Composer<CtxMessageUpdate> {
        return this.core.command(cmd, middleware);
    }
}
