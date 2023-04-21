"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropositionRoute = void 0;
const express_1 = require("express");
const propositions_controller_1 = require("@/controllers/propositions.controller");
const propositions_dto_1 = require("@dtos/propositions.dto");
const validation_middleware_1 = require("@middlewares/validation.middleware");
class PropositionRoute {
    constructor() {
        this.path = '/propositions';
        this.router = (0, express_1.Router)();
        this.proposition = new propositions_controller_1.PropositionController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.proposition.getPropositions);
        this.router.get(`${this.path}/:id`, this.proposition.getPropositionById);
        this.router.post(`${this.path}`, (0, validation_middleware_1.ValidationMiddleware)(propositions_dto_1.CreatePropositionDto), this.proposition.createProposition);
        this.router.put(`${this.path}/:id`, (0, validation_middleware_1.ValidationMiddleware)(propositions_dto_1.UpdatePropositionDto), this.proposition.updateProposition);
        this.router.delete(`${this.path}/:id`, this.proposition.deleteProposition);
    }
}
exports.PropositionRoute = PropositionRoute;
//# sourceMappingURL=propositions.route.js.map