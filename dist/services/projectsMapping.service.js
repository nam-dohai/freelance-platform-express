"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsMappingService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const projectsMapping_model_1 = require("@models/projectsMapping.model");
let ProjectsMappingService = class ProjectsMappingService {
    async findAllProjectsMapping() {
        const projectsMapping = await projectsMapping_model_1.ProjectMappingModel.query().select().from('projects_mapping');
        return projectsMapping;
    }
    async createMapping(projectId, projectCategoryIds) {
        console.log({ projectId, projectCategoryIds });
        const projectsMappingData = await Promise.all(projectCategoryIds.map(async (projectCategoryId) => {
            const projectMapping = await projectsMapping_model_1.ProjectMappingModel.query().insert({
                project_id: projectId,
                project_category_id: projectCategoryId,
            });
            return projectMapping;
        }));
        console.log(projectsMappingData);
        return projectsMappingData;
    }
    async deleteMapping(projectId, projectCategoryIds) {
        const findProjectsMapping = await projectsMapping_model_1.ProjectMappingModel.query()
            .select()
            .from('projects_mapping')
            .where('project_id', '=', projectId);
        await Promise.all(projectCategoryIds.map(async (projectCategoryId) => {
            const projectMapping = await projectsMapping_model_1.ProjectMappingModel.query()
                .delete()
                .where('project_id', '=', projectId)
                .where('project_category_id', '=', projectCategoryId)
                .into('projects_mapping');
            return projectMapping;
        }));
        return findProjectsMapping;
    }
};
ProjectsMappingService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], ProjectsMappingService);
exports.ProjectsMappingService = ProjectsMappingService;
//# sourceMappingURL=projectsMapping.service.js.map