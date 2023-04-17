import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Project } from '@interfaces/projects.interface';
import { ProjectService } from '@services/projects.service';

export class ProjectController {
  public project = Container.get(ProjectService);

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
      const createProjectData: Project = await this.project.createProject(projectData);

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
