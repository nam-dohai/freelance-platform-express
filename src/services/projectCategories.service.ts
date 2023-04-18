import { Service } from 'typedi';
import { CreateProjectCategoryDto } from '@dtos/projectCategories.dto';
import { HttpException } from '@exceptions/httpException';
import { ProjectCategory } from '@/interfaces/projectCategories.interface';
import { ProjectCategoryModel } from '@models/projectCategories.model';

@Service()
export class ProjectCategoryService {
  public async findAllProjectCategories(): Promise<ProjectCategory[]> {
    const projectCategories: ProjectCategory[] = await ProjectCategoryModel.query().select().from('project_categories');
    return projectCategories;
  }
  public async findProjectCategoryById(projectCategoryId: string): Promise<ProjectCategory> {
    const findProjectCategory: ProjectCategory = await ProjectCategoryModel.query().findById(projectCategoryId);
    if (!findProjectCategory) throw new HttpException(409, "ProjectCategory doesn't exist");

    return findProjectCategory;
  }

  public async createProjectCategory(projectCategory: CreateProjectCategoryDto): Promise<ProjectCategory> {
    const createProjectCategoryData: ProjectCategory = await ProjectCategoryModel.query()
      .insert({ ...projectCategory })
      .into('project_categories');

    return createProjectCategoryData;
  }

  public async updateProjectCategory(projectCategoryId: string, projectCategoryData: ProjectCategory): Promise<ProjectCategory> {
    const findProjectCategory: ProjectCategory[] = await ProjectCategoryModel.query()
      .select()
      .from('project_categories')
      .where('id', '=', projectCategoryId);
    if (!findProjectCategory) throw new HttpException(409, "ProjectCategory doesn't exist");

    await ProjectCategoryModel.query()
      .update({ ...projectCategoryData })
      .where('id', '=', projectCategoryId)
      .into('project_categories');

    const updateProjectCategoryData: ProjectCategory = await ProjectCategoryModel.query()
      .select()
      .from('project_categories')
      .where('id', '=', projectCategoryId)
      .first();
    return updateProjectCategoryData;
  }

  public async deleteProjectCategory(projectCategoryId: string): Promise<ProjectCategory> {
    const findProjectCategory: ProjectCategory = await ProjectCategoryModel.query()
      .select()
      .from('project_categories')
      .where('id', '=', projectCategoryId)
      .first();
    if (!findProjectCategory) throw new HttpException(409, "ProjectCategory doesn't exist");

    await ProjectCategoryModel.query().delete().where('id', '=', projectCategoryId).into('project_categories');
    return findProjectCategory;
  }
}
