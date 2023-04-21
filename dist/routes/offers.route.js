"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferRoute = void 0;
const express_1 = require("express");
const offers_controller_1 = require("@/controllers/offers.controller");
const offers_dto_1 = require("@dtos/offers.dto");
const validation_middleware_1 = require("@middlewares/validation.middleware");
class OfferRoute {
    constructor() {
        this.path = '/offers';
        this.router = (0, express_1.Router)();
        this.offer = new offers_controller_1.OfferController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.offer.getOffers);
        this.router.get(`${this.path}/:id`, this.offer.getOfferById);
        this.router.post(`${this.path}`, (0, validation_middleware_1.ValidationMiddleware)(offers_dto_1.CreateOfferDto), this.offer.createOffer);
        this.router.put(`${this.path}/:id`, (0, validation_middleware_1.ValidationMiddleware)(offers_dto_1.UpdateOfferDto), this.offer.updateOffer);
        this.router.delete(`${this.path}/:id`, this.offer.deleteOffer);
    }
}
exports.OfferRoute = OfferRoute;
//# sourceMappingURL=offers.route.js.map