import {inject, injectable} from 'inversify';

import {Tokens, Controller} from './types';
import {TelegramApi} from './core/providers/telegram-api/telegram-api.interface';

@injectable()
export class Application {
    private telegramApi: TelegramApi;

    private noteController: Controller;
    private welcomeController: Controller;
    private sectionController: Controller;

    public constructor(
        @inject(Tokens.Telegram) telegramApi: TelegramApi,

        @inject(Tokens.NoteController) noteController: Controller,
        @inject(Tokens.WelcomeController) welcomeController: Controller,
        @inject(Tokens.SectionController) sectionController: Controller,
    ) {
        this.telegramApi = telegramApi;

        this.noteController = noteController;
        this.sectionController = sectionController;
        this.welcomeController = welcomeController;
    }

    private init(): void {
        this.noteController.onInit();
        this.sectionController.onInit();
        this.welcomeController.onInit();
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
