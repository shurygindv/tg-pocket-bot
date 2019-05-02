import {ContextMessageUpdate, Middleware, Composer, HearsTriggers, Extra} from 'telegraf';
import {Message as TelegramMessage} from 'telegram-typings';
import {
    MessageSubTypes as TelegragMsgSubTypes,
    ExtraReplyMessage,
} from 'telegraf/typings/telegram-types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Message extends TelegramMessage {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CtxMessageUpdate extends ContextMessageUpdate {}

export type MessageSubTypes = TelegragMsgSubTypes;

export type InlineKeyboardPair = [string, (ctx: CtxMessageUpdate) => Composer<CtxMessageUpdate>];

export interface TelegramApi {
    launch(): Promise<void>;

    start(middleware: Middleware<CtxMessageUpdate>): Composer<CtxMessageUpdate>;
    on(key: MessageSubTypes, middleware: Middleware<CtxMessageUpdate>): Composer<CtxMessageUpdate>;

    help(middleware: Middleware<CtxMessageUpdate>): Composer<CtxMessageUpdate>;

    hears(
        trigger: HearsTriggers,
        middleware: Middleware<CtxMessageUpdate>,
    ): Composer<CtxMessageUpdate>;

    command(cmd: string, middleware: Middleware<CtxMessageUpdate>): Composer<CtxMessageUpdate>;

    action(key: string, middleware: Middleware<CtxMessageUpdate>): Composer<CtxMessageUpdate>;

    configureInlineKeyboard(pairs: InlineKeyboardPair[]): ExtraReplyMessage | undefined;
}
