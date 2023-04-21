import { Model, ModelObject } from 'objection';
import { User } from '@interfaces/users.interface';
export declare class UserModel extends Model implements User {
    id: number;
    email: string;
    password: string;
    static tableName: string;
    static idColumn: string;
}
export type UserShape = ModelObject<UserModel>;
