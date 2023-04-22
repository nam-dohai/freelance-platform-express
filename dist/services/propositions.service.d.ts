import { CreatePropositionDto } from '../dtos/propositions.dto';
import { Proposition } from '../interfaces/propositions.interface';
export declare class PropositionService {
    findAllPropositions(): Promise<Proposition[]>;
    findPropositionById(propositionId: string): Promise<Proposition>;
    createProposition(proposition: CreatePropositionDto): Promise<Proposition>;
    updateProposition(propositionId: string, propositionData: Proposition): Promise<Proposition>;
    deleteProposition(propositionId: string): Promise<Proposition>;
}
