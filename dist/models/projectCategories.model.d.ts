import { Model, ModelObject } from 'objection';
import { ProjectCategory } from '@/interfaces/projectCategories.interface';
export declare class ProjectCategoryModel extends Model implements ProjectCategory {
    id: string;
    name: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    deleteAt: Date | null;
    static tableName: string;
    static idColumn: string;
}
export type ProjectCategoryShape = ModelObject<ProjectCategoryModel>;
