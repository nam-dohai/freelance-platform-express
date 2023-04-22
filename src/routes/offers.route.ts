import { Router } from 'express';
import { OfferController } from '../controllers/offers.controller';
import { CreateOfferDto, UpdateOfferDto } from '../dtos/offers.dto';
import { Routes } from '../interfaces/routes.interface';
import { ValidationMiddleware } from '../middlewares/validation.middleware';

export class OfferRoute implements Routes {
  public path = '/offers';
  public router = Router();
  public offer = new OfferController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.offer.getOffers);
    this.router.get(`${this.path}/:id`, this.offer.getOfferById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateOfferDto), this.offer.createOffer);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(UpdateOfferDto), this.offer.updateOffer);
    this.router.delete(`${this.path}/:id`, this.offer.deleteOffer);
  }
}
