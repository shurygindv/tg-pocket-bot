import {injectable, inject} from 'inversify';

import {Tokens} from '../types';
import {TelegramApi} from './providers/telegram-api/telegram-api.interface';

@injectable()
export class BaseController {
    protected telegramApi: TelegramApi;

    public constructor(@inject(Tokens.TelegramApi) telegramApi: TelegramApi) {
        this.telegramApi = telegramApi;
    }
}
