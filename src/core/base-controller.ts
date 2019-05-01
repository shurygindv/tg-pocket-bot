import {injectable, inject} from 'inversify';

import {Tokens} from '../types';
import {TelegramApi} from './providers/telegram-api/telegram-api.interface';

@injectable()
export class BaseController {
    protected telegram: TelegramApi;

    public constructor(@inject(Tokens.Telegram) telegramApi: TelegramApi) {
        this.telegram = telegramApi;
    }
}
