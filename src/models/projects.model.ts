import { Model, ModelObject } from 'objection';
import { Project } from '@interfaces/projects.interface';

export class ProjectModel extends Model implements Project {
  id!: string;
  name!: string;
  description!: string;
  price!: string;
  author_id: string;
  status: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deleteAt: Date | null;

  static tableName = 'projects'; // database table name
  static idColumn = 'id'; // id column name
}

export type ProjectShape = ModelObject<ProjectModel>;
