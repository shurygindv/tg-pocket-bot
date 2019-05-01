import {Container} from 'inversify';

// welcome
import {WelcomeController} from '../endpoints/welcome/welcome.controller';

// sections
import {SectionController} from '../endpoints/section/section.controller';
import {SectionService} from '../endpoints/section/section.service';

// notes
import {NoteService} from '../endpoints/note/note.service';
import {NoteController} from '../endpoints/note/note.controller';

import {Tokens} from '../types';
import {Application} from '../application';
import {DatabaseProvider} from '../core/providers/database/database';
import {TelegramApi} from '../core/providers/telegram-api/telegram-api';

const moduleContainer: Container = new Container();

// welcome
moduleContainer
    .bind(Tokens.WelcomeController)
    .to(WelcomeController)
    .inSingletonScope();

// section
moduleContainer
    .bind(Tokens.SectionController)
    .to(SectionController)
    .inSingletonScope();

moduleContainer
    .bind(Tokens.SectionService)
    .to(SectionService)
    .inSingletonScope();

// note
moduleContainer
    .bind(Tokens.NoteController)
    .to(NoteController)
    .inSingletonScope();

moduleContainer
    .bind(Tokens.NoteService)
    .to(NoteService)
    .inSingletonScope();

// core
moduleContainer
    .bind(Tokens.TelegramApi)
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
