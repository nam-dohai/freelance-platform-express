import { ProjectCategoryController } from '../controllers/projectCategories.controller';
import { Routes } from '../interfaces/routes.interface';
export declare class ProjectCategoryRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    projectCategory: ProjectCategoryController;
    constructor();
    private initializeRoutes;
}
