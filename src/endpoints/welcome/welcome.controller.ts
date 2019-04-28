import {injectable} from 'inversify';

import {Controller} from '../../types';

@injectable()
export class WelcomeController implements Controller {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    onInit(): void {}
}
