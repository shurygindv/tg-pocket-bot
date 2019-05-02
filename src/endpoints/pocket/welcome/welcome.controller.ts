import {injectable} from 'inversify';

import {Controller} from '../../../types';
import {BaseController} from '../../../core/base-controller';

@injectable()
export class WelcomeController extends BaseController implements Controller {
    public onInit(): void {
        console.log('Welcome module connected');
    }
}
