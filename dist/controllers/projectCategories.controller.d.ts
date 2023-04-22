import { NextFunction, Request, Response } from 'express';
import { ProjectCategoryService } from '../services/projectCategories.service';
export declare class ProjectCategoryController {
    projectCategory: ProjectCategoryService;
    getProjectCategories: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProjectCategoryById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createProjectCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateProjectCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteProjectCategory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
