import {
    ContextMessageUpdate,
    Middleware,
    Composer,
    HearsTriggers,
} from 'telegraf';
import {MessageSubTypes} from 'telegraf/typings/telegram-types';

export interface TelegramApi {
    launch(): Promise<void>;

    start(
        middleware: Middleware<ContextMessageUpdate>,
    ): Composer<ContextMessageUpdate>;
    on(
        key: MessageSubTypes,
        middleware: Middleware<ContextMessageUpdate>,
    ): Composer<ContextMessageUpdate>;

    help(
        middleware: Middleware<ContextMessageUpdate>,
    ): Composer<ContextMessageUpdate>;

    hears(
        trigger: HearsTriggers,
        middleware: Middleware<ContextMessageUpdate>,
    ): Composer<ContextMessageUpdate>;
}
