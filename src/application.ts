import {inject, injectable} from 'inversify';

import {Tokens, Controller} from './types';
import {TelegramApi} from './core/providers/telegram-api/telegram-api.interface';

@injectable()
export class Application {
    private telegramApi: TelegramApi;
    private pocketController: Controller;

    public constructor(
        @inject(Tokens.Telegram) telegramApi: TelegramApi,

        @inject(Tokens.PocketController) pocketController: Controller,
    ) {
        this.telegramApi = telegramApi;
        this.pocketController = pocketController;
    }

    private init(): void {
        this.pocketController.onInit();
    }

    private launch = (): void => {
        this.telegramApi.launch();
    };

    public async bootstrap(): Promise<() => void> {
        return new Promise(
            (resolver: () => void): void => {
                this.init();
                this.launch();

                resolver();
            },
        );
    }
}
