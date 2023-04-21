import { NextFunction, Request, Response } from 'express';
import { PropositionService } from '@services/propositions.service';
export declare class PropositionController {
    proposition: PropositionService;
    getPropositions: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getPropositionById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createProposition: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateProposition: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteProposition: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
