import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { ProjectCategory } from '@interfaces/projectCategories.projectCategories';
import { ProjectCategoryService } from '@services/projectCategories.service';

export class ProjectCategoryController {
  public projectCategory = Container.get(ProjectCategoryService);

  public getProjectCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllProjectCategoriesData: ProjectCategory[] = await this.projectCategory.findAllProjectCategories();

      res.status(200).json({ data: findAllProjectCategoriesData });
    } catch (error) {
      next(error);
    }
  };

  public getProjectCategoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const projectCategoryId = req.params.id;
      const findProjectCategoryData: ProjectCategory = await this.projectCategory.findProjectCategoryById(projectCategoryId);

      res.status(200).json({ data: findProjectCategoryData });
    } catch (error) {
      next(error);
    }
  };

  public createProjectCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const projectCategoryData: ProjectCategory = req.body;
      const createProjectCategoryData: ProjectCategory = await this.projectCategory.createProjectCategory(projectCategoryData);

      res.status(201).json({ data: createProjectCategoryData });
    } catch (error) {
      next(error);
    }
  };

  public updateProjectCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const projectCategoryId = req.params.id;
      const projectCategoryData: ProjectCategory = req.body;
      const updateProjectCategoryData: ProjectCategory = await this.projectCategory.updateProjectCategory(projectCategoryId, projectCategoryData);

      res.status(200).json({ data: updateProjectCategoryData });
    } catch (error) {
      next(error);
    }
  };

  public deleteProjectCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const projectCategoryId = req.params.id;
      const deleteProjectCategoryData: ProjectCategory = await this.projectCategory.deleteProjectCategory(projectCategoryId);

      res.status(200).json({ data: deleteProjectCategoryData });
    } catch (error) {
      next(error);
    }
  };
}
