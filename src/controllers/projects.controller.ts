import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Project } from '../interfaces/projects.interface';
import { ProjectService } from '../services/projects.service';

export class ProjectController {
  public project = Container.get(ProjectService);

  public getProjects = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllProjectsData: Project[] = await this.project.findAllProject();

      res.status(200).json({ data: findAllProjectsData });
    } catch (error) {
      next(error);
    }
  };

  public getProjectById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const projectId = req.params.id;
      const findProjectData: Project = await this.project.findProjectById(projectId);

      res.status(200).json({ data: findProjectData });
    } catch (error) {
      next(error);
    }
  };

  public createProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const projectData: Project = req.body;
      const createProjectData: Project = await this.project.createProject({
        name: projectData.name,
        description: projectData.description,
        price: projectData.price,
        author_id: projectData.author_id,
        status: projectData.status,
      });
      await this.project.addCategoriesToProject(createProjectData.id, req.body.project_category_ids);

      res.status(201).json({ data: createProjectData });
    } catch (error) {
      next(error);
    }
  };

  public updateProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const projectId = req.params.id;
      const projectData: Project = req.body;
      const updateProjectData: Project = await this.project.updateProject(projectId, projectData);

      res.status(200).json({ data: updateProjectData });
    } catch (error) {
      next(error);
    }
  };

  public deleteProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const projectId = req.params.id;
      const deleteProjectData: Project = await this.project.deleteProject(projectId);

      res.status(200).json({ data: deleteProjectData });
    } catch (error) {
      next(error);
    }
  };
}
