import 'reflect-metadata';

import {moduleContainer} from './config/inversify.cfg';
import {Application} from './application';
import {Tokens} from './types';

const application: Application = moduleContainer.get<Application>(
    Tokens.Application,
);

(async (): Promise<void> => {
    const launch = await application.bootstrap();

    launch();
})();
