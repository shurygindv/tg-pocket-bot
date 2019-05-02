import {injectable, inject} from 'inversify';

import {Controller, Tokens} from '../../types';
import {BaseController} from '../../core/base-controller';
import {
    CtxMessageUpdate,
    Message,
    TelegramApi,
} from '../../core/providers/telegram-api/telegram-api.interface';
import {TopicController} from './topic/topic.controller';
import {WelcomeController} from './welcome/welcome.controller';

// like entry-point

@injectable()
export class PocketController extends BaseController implements Controller {
    private topicController: TopicController;
    private welcomeController: WelcomeController;
    private telegram: TelegramApi;

    public constructor(
        @inject(Tokens.Telegram) telegramApi: TelegramApi,
        @inject(Tokens.TopicController) topicController: TopicController,
        @inject(Tokens.WelcomeController) welcomeController: WelcomeController,
    ) {
        super();

        this.telegram = telegramApi;
        this.topicController = topicController;
        this.welcomeController = welcomeController;
    }

    public onInit(): void {
        this.bePolite();
        this.setPanelCommand();
    }

    private setPanelCommand(): void {
        this.telegram.command('panel', ctx =>
            ctx.reply(
                'Special buttons keyboard',
                this.telegram.configureInlineKeyboard([
                    ['Change media', (ctx): any => ctx.reply('sss')],
                ]),
            ),
        );
    }

    private bePolite(): void {
        this.telegram.start(
            (ctx: CtxMessageUpdate): Promise<Message> => {
                return ctx.reply('Welcome! You are so cool, stay here :)');
            },
        );
    }
}
