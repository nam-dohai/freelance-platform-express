import { Service } from 'typedi';
import { CreateOfferDto } from '@dtos/offers.dto';
import { HttpException } from '@exceptions/httpException';
import { Offer } from '@interfaces/offers.interface';
import { OfferModel } from '@models/offers.model';

@Service()
export class OfferService {
  public async findAllOffers(): Promise<Offer[]> {
    const offers: Offer[] = await OfferModel.query().withGraphFetched('project').withGraphFetched('proponent').select().from('offers');

    return offers;
  }
  public async findOfferById(offerId: string): Promise<Offer> {
    const findOffer: Offer = await OfferModel.query().withGraphFetched('project').withGraphFetched('proponent').findById(offerId);
    if (!findOffer) throw new HttpException(409, "Offer doesn't exist");

    return findOffer;
  }

  public async createOffer(offer: CreateOfferDto): Promise<Offer> {
    const createOfferData: Offer = await OfferModel.query()
      .insert({ ...offer })
      .into('offers');

    return createOfferData;
  }

  public async updateOffer(offerId: string, offerData: Offer): Promise<Offer> {
    const findOffer: Offer[] = await OfferModel.query().select().from('offers').where('id', '=', offerId);
    if (!findOffer) throw new HttpException(409, "Offer doesn't exist");

    await OfferModel.query()
      .update({ ...offerData })
      .where('id', '=', offerId)
      .into('offers');

    const updateOfferData: Offer = await OfferModel.query()
      .withGraphFetched('project')
      .withGraphFetched('proponent')
      .select()
      .from('offers')
      .where('id', '=', offerId)
      .first();
    return updateOfferData;
  }

  public async deleteOffer(offerId: string): Promise<Offer> {
    const findOffer: Offer = await OfferModel.query().select().from('offers').where('id', '=', offerId).first();
    if (!findOffer) throw new HttpException(409, "Offer doesn't exist");

    await OfferModel.query().delete().where('id', '=', offerId).into('offers');
    return findOffer;
  }
}
