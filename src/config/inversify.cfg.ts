import {Container} from 'inversify';

// welcome
import {WelcomeController} from '../endpoints/pocket/welcome/welcome.controller';

// sections
import {TopicController} from '../endpoints/pocket/topic/topic.controller';
import {TopicService} from '../endpoints/pocket/topic/topic.service';

import {Tokens} from '../types';
import {Application} from '../application';
import {DatabaseProvider} from '../core/providers/database/database';
import {TelegramApi} from '../core/providers/telegram-api/telegram-api';
import {PocketController} from '../endpoints/pocket/pocket.controller';

const moduleContainer: Container = new Container();

// welcome
moduleContainer
    .bind(Tokens.WelcomeController)
    .to(WelcomeController)
    .inSingletonScope();

// section
moduleContainer
    .bind(Tokens.TopicController)
    .to(TopicController)
    .inSingletonScope();

moduleContainer
    .bind(Tokens.TopicService)
    .to(TopicService)
    .inSingletonScope();

// endpoints
moduleContainer
    .bind(Tokens.PocketController)
    .to(PocketController)
    .inSingletonScope();

// core
moduleContainer
    .bind(Tokens.Telegram)
    .to(TelegramApi)
    .inSingletonScope();

moduleContainer
    .bind(Tokens.Application)
    .to(Application)
    .inSingletonScope();

moduleContainer
    .bind(Tokens.DatabaseService)
    .to(DatabaseProvider)
    .inSingletonScope();

export {moduleContainer};
