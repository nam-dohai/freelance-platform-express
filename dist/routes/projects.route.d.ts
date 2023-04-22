import { ProjectController } from '../controllers/projects.controller';
import { Routes } from '../interfaces/routes.interface';
export declare class ProjectRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    project: ProjectController;
    constructor();
    private initializeRoutes;
}
