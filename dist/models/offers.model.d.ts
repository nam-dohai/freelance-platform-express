import { Model, ModelObject } from 'objection';
import { Offer } from '../interfaces/offers.interface';
import { UserProfileModel } from './userProfile.model';
import { ProjectModel } from './projects.model';
export declare class OfferModel extends Model implements Offer {
    id: string;
    project_id: string;
    proponent_id: string;
    message: string;
    price: string;
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
export type OfferShape = ModelObject<OfferModel>;
