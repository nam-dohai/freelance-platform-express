import { Model, ModelObject } from 'objection';
import { ProjectMapping } from '@/interfaces/projectsMapping.interface';
export declare class ProjectMappingModel extends Model implements ProjectMapping {
    id: string;
    project_id: string;
    project_category_id: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    deleteAt: Date | null;
    static tableName: string;
    static idColumn: string;
}
export type ProjectMappingShape = ModelObject<ProjectMappingModel>;
