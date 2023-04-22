import { ProjectMapping } from '../interfaces/projectsMapping.interface';
export declare class ProjectsMappingService {
    findAllProjectsMapping(): Promise<ProjectMapping[]>;
    createMapping(projectId: string, projectCategoryIds: Array<string>): Promise<Array<ProjectMapping>>;
    deleteMapping(projectId: string, projectCategoryIds: Array<string>): Promise<Array<ProjectMapping>>;
}
