import {injectable, inject} from 'inversify';

import {Controller, Tokens} from '../../../types';
import {TopicService} from './topic.interface';
// import {createTelegramBaseScene} from '../../../core/providers/telegram-api/telegram-api';

@injectable()
export class TopicController implements Controller {
    private topicService: TopicService;

    public constructor(@inject(Tokens.TopicService) topicService: TopicService) {
        this.topicService = topicService;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onInit(): void {
        /*
        const [greeter, leave] = createTelegramBaseScene('greeter');

        greeter.enter(ctx => ctx.reply('Hi'));
        greeter.leave(ctx => ctx.reply('Bye'));
        greeter.hears(/hi/gi, leave());
        greeter.on('message', ctx => ctx.reply('Send `hi`'));
        */
    }
}
