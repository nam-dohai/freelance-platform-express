"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropositionService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const httpException_1 = require("@exceptions/httpException");
const propositions_model_1 = require("@models/propositions.model");
let PropositionService = class PropositionService {
    async findAllPropositions() {
        const propositions = await propositions_model_1.PropositionModel.query()
            .withGraphFetched('project')
            .withGraphFetched('proponent')
            .select()
            .from('propositions');
        return propositions;
    }
    async findPropositionById(propositionId) {
        const findProposition = await propositions_model_1.PropositionModel.query()
            .withGraphFetched('project')
            .withGraphFetched('proponent')
            .findById(propositionId);
        if (!findProposition)
            throw new httpException_1.HttpException(409, "Proposition doesn't exist");
        return findProposition;
    }
    async createProposition(proposition) {
        console.log(proposition);
        const createPropositionData = await propositions_model_1.PropositionModel.query()
            .insert(Object.assign({}, proposition))
            .into('propositions');
        return createPropositionData;
    }
    async updateProposition(propositionId, propositionData) {
        const findProposition = await propositions_model_1.PropositionModel.query().select().from('propositions').where('id', '=', propositionId);
        if (!findProposition)
            throw new httpException_1.HttpException(409, "Proposition doesn't exist");
        await propositions_model_1.PropositionModel.query()
            .update(Object.assign({}, propositionData))
            .where('id', '=', propositionId)
            .into('propositions');
        const updatePropositionData = await propositions_model_1.PropositionModel.query()
            .withGraphFetched('project')
            .withGraphFetched('proponent')
            .select()
            .from('propositions')
            .where('id', '=', propositionId)
            .first();
        return updatePropositionData;
    }
    async deleteProposition(propositionId) {
        const findProposition = await propositions_model_1.PropositionModel.query().select().from('propositions').where('id', '=', propositionId).first();
        if (!findProposition)
            throw new httpException_1.HttpException(409, "Proposition doesn't exist");
        await propositions_model_1.PropositionModel.query().delete().where('id', '=', propositionId).into('propositions');
        return findProposition;
    }
};
PropositionService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], PropositionService);
exports.PropositionService = PropositionService;
//# sourceMappingURL=propositions.service.js.map