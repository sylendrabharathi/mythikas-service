import { Request, Response } from 'express';
import appCtrl from './AppCtrl';
import MobileAppService from './../services/MobileAppService';
class MobileAppCtrl {

    async login(req: Request, res: Response) {
		appCtrl.renderResponse(res, MobileAppService.login(req));
	}
}

export default new MobileAppCtrl();