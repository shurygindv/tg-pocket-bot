import * as R from 'ramda';
import Telegraf, {
    ContextMessageUpdate,
    Middleware,
    Extra,
    Composer,
    HearsTriggers,
    Markup,
    CallbackButton,
} from 'telegraf';
import {injectable} from 'inversify';

import {ENV} from '../../../config/env';
import {
    CtxMessageUpdate,
    MessageSubTypes,
    InlineKeyboardPair,
} from './telegram-api.interface';
import {randomId} from '../../../utils';
import {InlineKeyboardMarkup} from 'telegram-typings';

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

    public action(
        key: string,
        middleware: Middleware<CtxMessageUpdate>,
    ): Composer<CtxMessageUpdate> {
        // TODO: replace any https://github.com/telegraf/telegraf/issues/71
        return (this.telegraf as any).action(key, middleware);
    }

    public showInlineKeyboard(pairs: InlineKeyboardPair[]): any {
        // TODO: refactor + https://github.com/telegraf/telegraf/issues/71

        return Extra.markup(
            (m: Markup): InlineKeyboardMarkup => {
                return m.inlineKeyboard(
                    pairs.map(
                        ([
                            name,
                            action,
                        ]: InlineKeyboardPair): CallbackButton => {
                            const id = randomId();

                            this.action(id, action);
                            return m.callbackButton(name, id, false);
                        },
                    ),
                    {},
                );
            },
        );
    }
}
