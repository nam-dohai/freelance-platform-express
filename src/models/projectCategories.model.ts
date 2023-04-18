import { Model, ModelObject } from 'objection';
import { ProjectCategory } from '@/interfaces/projectCategories.interface';

export class ProjectCategoryModel extends Model implements ProjectCategory {
  id!: string;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;

  static tableName = 'project_categories'; // database table name
  static idColumn = 'id'; // id column name
}

export type ProjectCategoryShape = ModelObject<ProjectCategoryModel>;
