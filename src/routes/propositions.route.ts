import { Router } from 'express';
import { PropositionController } from '../controllers/propositions.controller';
import { CreatePropositionDto, UpdatePropositionDto } from '../dtos/propositions.dto';
import { Routes } from '../interfaces/routes.interface';
import { ValidationMiddleware } from '../middlewares/validation.middleware';

export class PropositionRoute implements Routes {
  public path = '/propositions';
  public router = Router();
  public proposition = new PropositionController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.proposition.getPropositions);
    this.router.get(`${this.path}/:id`, this.proposition.getPropositionById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreatePropositionDto), this.proposition.createProposition);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(UpdatePropositionDto), this.proposition.updateProposition);
    this.router.delete(`${this.path}/:id`, this.proposition.deleteProposition);
  }
}
