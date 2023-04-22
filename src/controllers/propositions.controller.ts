import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Proposition } from '../interfaces/propositions.interface';
import { PropositionService } from '../services/propositions.service';

export class PropositionController {
  public proposition = Container.get(PropositionService);

  public getPropositions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllPropositionsData: Proposition[] = await this.proposition.findAllPropositions();

      res.status(200).json({ data: findAllPropositionsData });
    } catch (error) {
      next(error);
    }
  };

  public getPropositionById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const propositionId = req.params.id;
      const findPropositionData: Proposition = await this.proposition.findPropositionById(propositionId);

      res.status(200).json({ data: findPropositionData });
    } catch (error) {
      next(error);
    }
  };

  public createProposition = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const propositionData: Proposition = req.body;
      const createPropositionData: Proposition = await this.proposition.createProposition(propositionData);

      res.status(201).json({ data: createPropositionData });
    } catch (error) {
      next(error);
    }
  };

  public updateProposition = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const propositionId = req.params.id;
      const propositionData: Proposition = req.body;
      const updatePropositionData: Proposition = await this.proposition.updateProposition(propositionId, propositionData);

      res.status(200).json({ data: updatePropositionData });
    } catch (error) {
      next(error);
    }
  };

  public deleteProposition = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const propositionId = req.params.id;
      const deletePropositionData: Proposition = await this.proposition.deleteProposition(propositionId);

      res.status(200).json({ data: deletePropositionData });
    } catch (error) {
      next(error);
    }
  };
}
