import { Model, ModelObject } from 'objection';
import { ProjectMapping } from '@/interfaces/projectsMapping.interface';

export class ProjectMappingModel extends Model implements ProjectMapping {
  id!: string;
  project_id: string;
  project_category_id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;

  static tableName = 'projects_mapping'; // database table name
  static idColumn = 'id'; // id column name
}

export type ProjectMappingShape = ModelObject<ProjectMappingModel>;
