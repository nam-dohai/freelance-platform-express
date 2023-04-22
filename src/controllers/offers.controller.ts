import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Offer } from '../interfaces/offers.interface';
import { OfferService } from '../services/offers.service';

export class OfferController {
  public offer = Container.get(OfferService);

  public getOffers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllOffersData: Offer[] = await this.offer.findAllOffers();

      res.status(200).json({ data: findAllOffersData });
    } catch (error) {
      next(error);
    }
  };

  public getOfferById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const offerId = req.params.id;
      const findOfferData: Offer = await this.offer.findOfferById(offerId);

      res.status(200).json({ data: findOfferData });
    } catch (error) {
      next(error);
    }
  };

  public createOffer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const offerData: Offer = req.body;
      const createOfferData: Offer = await this.offer.createOffer(offerData);

      res.status(201).json({ data: createOfferData });
    } catch (error) {
      next(error);
    }
  };

  public updateOffer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const offerId = req.params.id;
      const offerData: Offer = req.body;
      const updateOfferData: Offer = await this.offer.updateOffer(offerId, offerData);

      res.status(200).json({ data: updateOfferData });
    } catch (error) {
      next(error);
    }
  };

  public deleteOffer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const offerId = req.params.id;
      const deleteOfferData: Offer = await this.offer.deleteOffer(offerId);

      res.status(200).json({ data: deleteOfferData });
    } catch (error) {
      next(error);
    }
  };
}
