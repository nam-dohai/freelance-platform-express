import { CreateOfferDto } from '@dtos/offers.dto';
import { Offer } from '@interfaces/offers.interface';
export declare class OfferService {
    findAllOffers(): Promise<Offer[]>;
    findOfferById(offerId: string): Promise<Offer>;
    createOffer(offer: CreateOfferDto): Promise<Offer>;
    updateOffer(offerId: string, offerData: Offer): Promise<Offer>;
    deleteOffer(offerId: string): Promise<Offer>;
}
