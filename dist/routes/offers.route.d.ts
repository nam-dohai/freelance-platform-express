import { OfferController } from '@/controllers/offers.controller';
import { Routes } from '@interfaces/routes.interface';
export declare class OfferRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    offer: OfferController;
    constructor();
    private initializeRoutes;
}
