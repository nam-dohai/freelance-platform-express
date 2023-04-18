import { Service } from 'typedi';
import { ProjectMapping } from '@interfaces/projectsMapping.interface';
import { ProjectMappingModel } from '@models/projectsMapping.model';

@Service()
export class ProjectsMappingService {
  public async findAllProjectsMapping(): Promise<ProjectMapping[]> {
    const projectsMapping: ProjectMapping[] = await ProjectMappingModel.query().select().from('projects_mapping');
    return projectsMapping;
  }

  public async createMapping(projectId: string, projectCategoryIds: Array<string>): Promise<Array<ProjectMapping>> {
    console.log({ projectId, projectCategoryIds });

    const projectsMappingData = await Promise.all(
      projectCategoryIds.map(async projectCategoryId => {
        const projectMapping = await ProjectMappingModel.query().insert({
          project_id: projectId,
          project_category_id: projectCategoryId,
        });
        return projectMapping;
      }),
    );
    console.log(projectsMappingData);
    return projectsMappingData;
  }

  public async deleteMapping(projectId: string, projectCategoryIds: Array<string>): Promise<Array<ProjectMapping>> {
    const findProjectsMapping: ProjectMapping[] = await ProjectMappingModel.query()
      .select()
      .from('projects_mapping')
      .where('project_id', '=', projectId);

    await Promise.all(
      projectCategoryIds.map(async projectCategoryId => {
        const projectMapping = await ProjectMappingModel.query()
          .delete()
          .where('project_id', '=', projectId)
          .where('project_category_id', '=', projectCategoryId)
          .into('projects_mapping');
        return projectMapping;
      }),
    );
    return findProjectsMapping;
  }
}
