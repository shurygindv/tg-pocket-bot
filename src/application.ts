import {inject, injectable} from 'inversify';

import {Tokens, Controller} from './types';
import {TelegramApi} from './providers/telegram-api/telegram-api.interface';

@injectable()
export class Application {
    private telegramApi: TelegramApi;

    private noteController: Controller;
    private welcomeController: Controller;
    private sectionController: Controller;

    public constructor(
        @inject(Tokens.TelegramApi) telegramApi: TelegramApi,

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

    private launchApi = (): void => {
        this.telegramApi.launch();
    };

    public async bootstrap(): Promise<() => void> {
        return new Promise(
            (resolver: (launcher: any) => void): void => {
                this.init();

                resolver(this.launchApi);
            },
        );
    }
}
