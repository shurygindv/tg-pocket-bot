import {injectable} from 'inversify';

import {Controller} from '../../types';
import {BaseController} from '../../core/base-controller';
import {
    CtxMessageUpdate,
    Message,
} from '../../core/providers/telegram-api/telegram-api.interface';

@injectable()
export class WelcomeController extends BaseController implements Controller {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility

    private bePolite(): void {
        this.telegramApi.start(
            (ctx: CtxMessageUpdate): Promise<Message> => {
                return ctx.reply('Welcome! You are so cool, stay here :)');
            },
        );
    }

    public onInit(): void {
        this.bePolite();
    }
}
