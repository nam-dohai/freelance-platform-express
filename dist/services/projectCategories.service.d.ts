import { CreateProjectCategoryDto } from '../dtos/projectCategories.dto';
import { ProjectCategory } from '../interfaces/projectCategories.interface';
export declare class ProjectCategoryService {
    findAllProjectCategories(): Promise<ProjectCategory[]>;
    findProjectCategoryById(projectCategoryId: string): Promise<ProjectCategory>;
    createProjectCategory(projectCategory: CreateProjectCategoryDto): Promise<ProjectCategory>;
    updateProjectCategory(projectCategoryId: string, projectCategoryData: ProjectCategory): Promise<ProjectCategory>;
    deleteProjectCategory(projectCategoryId: string): Promise<ProjectCategory>;
}
