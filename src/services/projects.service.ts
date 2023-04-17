import { Service } from 'typedi';
import { CreateProjectDto } from '@dtos/projects.dto';
import { HttpException } from '@exceptions/httpException';
import { Project } from '@interfaces/projects.interface';
import { ProjectModel } from '@models/projects.model';

@Service()
export class ProjectService {
  public async findProjectById(projectId: string): Promise<Project> {
    const findProject: Project = await ProjectModel.query().findById(projectId);
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
}
