"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferController = void 0;
const typedi_1 = require("typedi");
const offers_service_1 = require("@services/offers.service");
class OfferController {
    constructor() {
        this.offer = typedi_1.Container.get(offers_service_1.OfferService);
        this.getOffers = async (req, res, next) => {
            try {
                const findAllOffersData = await this.offer.findAllOffers();
                res.status(200).json({ data: findAllOffersData });
            }
            catch (error) {
                next(error);
            }
        };
        this.getOfferById = async (req, res, next) => {
            try {
                const offerId = req.params.id;
                const findOfferData = await this.offer.findOfferById(offerId);
                res.status(200).json({ data: findOfferData });
            }
            catch (error) {
                next(error);
            }
        };
        this.createOffer = async (req, res, next) => {
            try {
                const offerData = req.body;
                const createOfferData = await this.offer.createOffer(offerData);
                res.status(201).json({ data: createOfferData });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateOffer = async (req, res, next) => {
            try {
                const offerId = req.params.id;
                const offerData = req.body;
                const updateOfferData = await this.offer.updateOffer(offerId, offerData);
                res.status(200).json({ data: updateOfferData });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteOffer = async (req, res, next) => {
            try {
                const offerId = req.params.id;
                const deleteOfferData = await this.offer.deleteOffer(offerId);
                res.status(200).json({ data: deleteOfferData });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.OfferController = OfferController;
//# sourceMappingURL=offers.controller.js.map