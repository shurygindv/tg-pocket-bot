import {injectable} from 'inversify';

import {Controller} from '../../types';
import {BaseController} from '../../core/base-controller';
import {
    CtxMessageUpdate,
    Message,
} from '../../core/providers/telegram-api/telegram-api.interface';

@injectable()
export class WelcomeController extends BaseController implements Controller {
    private bePolite(): void {
        this.telegram.start(
            (ctx: CtxMessageUpdate): Promise<Message> => {
                return ctx.reply('Welcome! You are so cool, stay here :)');
            },
        );
    }

    public onInit(): void {
        this.bePolite();

        this.telegram.command('edit', ctx =>
            ctx.reply(
                'Special buttons keyboard',
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                this.telegram.showInlineKeyboard([
                    ['Change media', (ctx): any => ctx.reply('sss')],
                ]),
            ),
        );
    }
}
