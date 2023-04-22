import { Service } from 'typedi';
import { CreatePropositionDto } from '../dtos/propositions.dto';
import { HttpException } from '../exceptions/httpException';
import { Proposition } from '../interfaces/propositions.interface';
import { PropositionModel } from '../models/propositions.model';

@Service()
export class PropositionService {
  public async findAllPropositions(): Promise<Proposition[]> {
    const propositions: Proposition[] = await PropositionModel.query()
      .withGraphFetched('project')
      .withGraphFetched('proponent')
      .select()
      .from('propositions');

    return propositions;
  }
  public async findPropositionById(propositionId: string): Promise<Proposition> {
    const findProposition: Proposition = await PropositionModel.query()
      .withGraphFetched('project')
      .withGraphFetched('proponent')
      .findById(propositionId);
    if (!findProposition) throw new HttpException(409, "Proposition doesn't exist");

    return findProposition;
  }

  public async createProposition(proposition: CreatePropositionDto): Promise<Proposition> {
    console.log(proposition);

    const createPropositionData: Proposition = await PropositionModel.query()
      .insert({ ...proposition })
      .into('propositions');

    return createPropositionData;
  }

  public async updateProposition(propositionId: string, propositionData: Proposition): Promise<Proposition> {
    const findProposition: Proposition[] = await PropositionModel.query().select().from('propositions').where('id', '=', propositionId);
    if (!findProposition) throw new HttpException(409, "Proposition doesn't exist");

    await PropositionModel.query()
      .update({ ...propositionData })
      .where('id', '=', propositionId)
      .into('propositions');

    const updatePropositionData: Proposition = await PropositionModel.query()
      .withGraphFetched('project')
      .withGraphFetched('proponent')
      .select()
      .from('propositions')
      .where('id', '=', propositionId)
      .first();
    return updatePropositionData;
  }

  public async deleteProposition(propositionId: string): Promise<Proposition> {
    const findProposition: Proposition = await PropositionModel.query().select().from('propositions').where('id', '=', propositionId).first();
    if (!findProposition) throw new HttpException(409, "Proposition doesn't exist");

    await PropositionModel.query().delete().where('id', '=', propositionId).into('propositions');
    return findProposition;
  }
}
