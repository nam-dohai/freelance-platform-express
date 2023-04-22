import { NextFunction, Request, Response } from 'express';
import { ProjectService } from '../services/projects.service';
export declare class ProjectController {
    project: ProjectService;
    getProjects: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProjectById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createProject: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateProject: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteProject: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
