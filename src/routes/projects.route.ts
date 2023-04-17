import { Router } from 'express';
import { ProjectController } from '@/controllers/projects.controller';
import { CreateProjectDto, UpdateProjectDto } from '@dtos/projects.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class ProjectRoute implements Routes {
  public path = '/projects';
  public router = Router();
  public project = new ProjectController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.project.getProjectById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateProjectDto), this.project.createProject);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(UpdateProjectDto), this.project.updateProject);
    this.router.delete(`${this.path}/:id`, this.project.deleteProject);
  }
}
