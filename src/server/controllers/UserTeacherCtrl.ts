import appCtrl from './AppCtrl';
import userTeacherService from '../services/UserTeacherService';
import { Request, Response } from 'express';

class UserTeacherCtrl {

	async getUserTeachers(req: Request, res: Response) {
		appCtrl.renderResponse(res, userTeacherService.getUserTeachers(req));
	}

	async getUserTeacherById(req: Request, res: Response) {
		appCtrl.renderResponse(res, userTeacherService.getUserTeacherById(req));
	}

	async saveUserTeacher(req: Request, res: Response) {
		appCtrl.renderResponse(res, userTeacherService.saveUserTeacher(req));
	}

	async updateUserTeacher(req: Request, res: Response) {
		appCtrl.renderResponse(res, userTeacherService.updateUserTeacher(req));
	}

	async getActiveUserTeacher(req: Request, res: Response) {
		appCtrl.renderResponse(res, userTeacherService.getActiveUserTeachers(req));
	}

	async getInActiveUserTeachers(req: Request, res: Response) {
		appCtrl.renderResponse(res, userTeacherService.getInActiveUserTeachers(req));
	}

	async changeUserTeacherStatus(req: Request, res: Response) {
		appCtrl.renderResponse(res, userTeacherService.changeUserTeacherStatus(req));
	}
}

const userTeacherCtrl = new UserTeacherCtrl();
export default userTeacherCtrl;