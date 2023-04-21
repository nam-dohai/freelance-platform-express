import { Model, ModelObject } from 'objection';
import { Proposition } from '@interfaces/propositions.interface';
import { UserProfileModel } from './userProfile.model';
import { ProjectModel } from './projects.model';
export declare class PropositionModel extends Model implements Proposition {
    id: string;
    project_id: string;
    proponent_id: string;
    message: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    deleteAt: Date | null;
    static tableName: string;
    static idColumn: string;
    static relationMappings: {
        project: {
            relation: import("objection").RelationType;
            modelClass: () => typeof ProjectModel;
            join: {
                from: string;
                to: string;
            };
        };
        proponent: {
            relation: import("objection").RelationType;
            modelClass: () => typeof UserProfileModel;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
export type PropositionShape = ModelObject<PropositionModel>;
