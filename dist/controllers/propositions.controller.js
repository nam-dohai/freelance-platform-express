"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropositionController = void 0;
const typedi_1 = require("typedi");
const propositions_service_1 = require("../services/propositions.service");
class PropositionController {
    constructor() {
        this.proposition = typedi_1.Container.get(propositions_service_1.PropositionService);
        this.getPropositions = async (req, res, next) => {
            try {
                const findAllPropositionsData = await this.proposition.findAllPropositions();
                res.status(200).json({ data: findAllPropositionsData });
            }
            catch (error) {
                next(error);
            }
        };
        this.getPropositionById = async (req, res, next) => {
            try {
                const propositionId = req.params.id;
                const findPropositionData = await this.proposition.findPropositionById(propositionId);
                res.status(200).json({ data: findPropositionData });
            }
            catch (error) {
                next(error);
            }
        };
        this.createProposition = async (req, res, next) => {
            try {
                const propositionData = req.body;
                const createPropositionData = await this.proposition.createProposition(propositionData);
                res.status(201).json({ data: createPropositionData });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateProposition = async (req, res, next) => {
            try {
                const propositionId = req.params.id;
                const propositionData = req.body;
                const updatePropositionData = await this.proposition.updateProposition(propositionId, propositionData);
                res.status(200).json({ data: updatePropositionData });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteProposition = async (req, res, next) => {
            try {
                const propositionId = req.params.id;
                const deletePropositionData = await this.proposition.deleteProposition(propositionId);
                res.status(200).json({ data: deletePropositionData });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.PropositionController = PropositionController;
//# sourceMappingURL=propositions.controller.js.map