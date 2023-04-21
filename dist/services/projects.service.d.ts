import { CreateProjectDto } from '@dtos/projects.dto';
import { Project } from '@interfaces/projects.interface';
export declare class ProjectService {
    findAllProject(): Promise<Project[]>;
    findProjectById(projectId: string): Promise<Project>;
    createProject(project: CreateProjectDto): Promise<Project>;
    updateProject(projectId: string, projectData: Project): Promise<Project>;
    deleteProject(projectId: string): Promise<Project>;
    addCategoriesToProject(projectId: string, projectCategoryIds: Array<string>): Promise<void>;
}
