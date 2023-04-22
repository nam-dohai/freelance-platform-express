import { NextFunction, Request, Response } from 'express';
import { OfferService } from '../services/offers.service';
export declare class OfferController {
    offer: OfferService;
    getOffers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getOfferById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createOffer: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateOffer: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteOffer: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
