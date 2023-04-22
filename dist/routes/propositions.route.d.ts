import { PropositionController } from '../controllers/propositions.controller';
import { Routes } from '../interfaces/routes.interface';
export declare class PropositionRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    proposition: PropositionController;
    constructor();
    private initializeRoutes;
}
