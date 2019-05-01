import {
    ContextMessageUpdate,
    Middleware,
    Composer,
    HearsTriggers,
} from 'telegraf';
import {Message as TelegramMessage} from 'telegram-typings';
import {MessageSubTypes as TelegragMsgSubTypes} from 'telegraf/typings/telegram-types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Message extends TelegramMessage {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CtxMessageUpdate extends ContextMessageUpdate {}

export type MessageSubTypes = TelegragMsgSubTypes;

export interface TelegramApi {
    launch(): Promise<void>;

    start(middleware: Middleware<CtxMessageUpdate>): Composer<CtxMessageUpdate>;
    on(
        key: MessageSubTypes,
        middleware: Middleware<CtxMessageUpdate>,
    ): Composer<CtxMessageUpdate>;

    help(middleware: Middleware<CtxMessageUpdate>): Composer<CtxMessageUpdate>;

    hears(
        trigger: HearsTriggers,
        middleware: Middleware<CtxMessageUpdate>,
    ): Composer<CtxMessageUpdate>;

    command(
        cmd: string,
        middleware: Middleware<CtxMessageUpdate>,
    ): Composer<CtxMessageUpdate>;
}
