"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const httpException_1 = require("../exceptions/httpException");
const offers_model_1 = require("../models/offers.model");
let OfferService = class OfferService {
    async findAllOffers() {
        const offers = await offers_model_1.OfferModel.query().withGraphFetched('project').withGraphFetched('proponent').select().from('offers');
        return offers;
    }
    async findOfferById(offerId) {
        const findOffer = await offers_model_1.OfferModel.query().withGraphFetched('project').withGraphFetched('proponent').findById(offerId);
        if (!findOffer)
            throw new httpException_1.HttpException(409, "Offer doesn't exist");
        return findOffer;
    }
    async createOffer(offer) {
        const createOfferData = await offers_model_1.OfferModel.query()
            .insert(Object.assign({}, offer))
            .into('offers');
        return createOfferData;
    }
    async updateOffer(offerId, offerData) {
        const findOffer = await offers_model_1.OfferModel.query().select().from('offers').where('id', '=', offerId);
        if (!findOffer)
            throw new httpException_1.HttpException(409, "Offer doesn't exist");
        await offers_model_1.OfferModel.query()
            .update(Object.assign({}, offerData))
            .where('id', '=', offerId)
            .into('offers');
        const updateOfferData = await offers_model_1.OfferModel.query()
            .withGraphFetched('project')
            .withGraphFetched('proponent')
            .select()
            .from('offers')
            .where('id', '=', offerId)
            .first();
        return updateOfferData;
    }
    async deleteOffer(offerId) {
        const findOffer = await offers_model_1.OfferModel.query().select().from('offers').where('id', '=', offerId).first();
        if (!findOffer)
            throw new httpException_1.HttpException(409, "Offer doesn't exist");
        await offers_model_1.OfferModel.query().delete().where('id', '=', offerId).into('offers');
        return findOffer;
    }
};
OfferService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], OfferService);
exports.OfferService = OfferService;
//# sourceMappingURL=offers.service.js.map