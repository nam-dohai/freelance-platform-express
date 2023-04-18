import Container, { Service } from 'typedi';
import { CreateProjectDto } from '@dtos/projects.dto';
import { HttpException } from '@exceptions/httpException';
import { Project } from '@interfaces/projects.interface';
import { ProjectModel, ProjectShape } from '@models/projects.model';
import { ProjectsMappingService } from './projectsMapping.service';

@Service()
export class ProjectService {
  public async findAllProject(): Promise<Project[]> {
    const projects: Project[] = await ProjectModel.query()
      .withGraphFetched('author')
      .withGraphFetched('worker')
      .withGraphFetched('propositions')
      .withGraphFetched('offers')
      .withGraphFetched('project_categories');

    return projects;
  }
  public async findProjectById(projectId: string): Promise<Project> {
    const findProject: Project = await ProjectModel.query()
      .withGraphFetched('author')
      .withGraphFetched('worker')
      .withGraphFetched('propositions')
      .withGraphFetched('offers')
      .withGraphFetched('project_categories')
      .findById(projectId);
    if (!findProject) throw new HttpException(409, "Project doesn't exist");

    return findProject;
  }

  public async createProject(project: CreateProjectDto): Promise<Project> {
    const createProjectData: Project = await ProjectModel.query()
      .insert({ ...project })
      .into('projects');

    return createProjectData;
  }

  public async updateProject(projectId: string, projectData: Project): Promise<Project> {
    const findProject: Project[] = await ProjectModel.query().select().from('projects').where('id', '=', projectId);
    if (!findProject) throw new HttpException(409, "Project doesn't exist");

    await ProjectModel.query()
      .update({ ...projectData })
      .where('id', '=', projectId)
      .into('projects');

    const updateProjectData: Project = await ProjectModel.query().select().from('projects').where('id', '=', projectId).first();
    return updateProjectData;
  }

  public async deleteProject(projectId: string): Promise<Project> {
    const findProject: Project = await ProjectModel.query().select().from('projects').where('id', '=', projectId).first();
    if (!findProject) throw new HttpException(409, "Project doesn't exist");

    await ProjectModel.query().delete().where('id', '=', projectId).into('projects');
    return findProject;
  }

  public async addCategoriesToProject(projectId: string, projectCategoryIds: Array<string>) {
    Container.get(ProjectsMappingService).createMapping(projectId, projectCategoryIds);
  }
}
