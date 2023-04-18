import { Router } from 'express';
import { ProjectCategoryController } from '@/controllers/projectCategories.controller';
import { CreateProjectCategoryDto, UpdateProjectCategoryDto } from '@dtos/projectCategories.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class ProjectCategoryRoute implements Routes {
  public path = '/project_categories';
  public router = Router();
  public projectCategory = new ProjectCategoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.projectCategory.getProjectCategories);
    this.router.get(`${this.path}/:id`, this.projectCategory.getProjectCategoryById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateProjectCategoryDto), this.projectCategory.createProjectCategory);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(UpdateProjectCategoryDto), this.projectCategory.updateProjectCategory);
    this.router.delete(`${this.path}/:id`, this.projectCategory.deleteProjectCategory);
  }
}
