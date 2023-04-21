"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = tslib_1.__importStar(require("typedi"));
const httpException_1 = require("@exceptions/httpException");
const projects_model_1 = require("@models/projects.model");
const projectsMapping_service_1 = require("./projectsMapping.service");
let ProjectService = class ProjectService {
    async findAllProject() {
        const projects = await projects_model_1.ProjectModel.query()
            .withGraphFetched('author')
            .withGraphFetched('worker')
            .withGraphFetched('propositions')
            .withGraphFetched('offers')
            .withGraphFetched('project_categories');
        return projects;
    }
    async findProjectById(projectId) {
        const findProject = await projects_model_1.ProjectModel.query()
            .withGraphFetched('author')
            .withGraphFetched('worker')
            .withGraphFetched('propositions')
            .withGraphFetched('offers')
            .withGraphFetched('project_categories')
            .findById(projectId);
        if (!findProject)
            throw new httpException_1.HttpException(409, "Project doesn't exist");
        return findProject;
    }
    async createProject(project) {
        const createProjectData = await projects_model_1.ProjectModel.query()
            .insert(Object.assign({}, project))
            .into('projects');
        return createProjectData;
    }
    async updateProject(projectId, projectData) {
        const findProject = await projects_model_1.ProjectModel.query().select().from('projects').where('id', '=', projectId);
        if (!findProject)
            throw new httpException_1.HttpException(409, "Project doesn't exist");
        await projects_model_1.ProjectModel.query()
            .update(Object.assign({}, projectData))
            .where('id', '=', projectId)
            .into('projects');
        const updateProjectData = await projects_model_1.ProjectModel.query().select().from('projects').where('id', '=', projectId).first();
        return updateProjectData;
    }
    async deleteProject(projectId) {
        const findProject = await projects_model_1.ProjectModel.query().select().from('projects').where('id', '=', projectId).first();
        if (!findProject)
            throw new httpException_1.HttpException(409, "Project doesn't exist");
        await projects_model_1.ProjectModel.query().delete().where('id', '=', projectId).into('projects');
        return findProject;
    }
    async addCategoriesToProject(projectId, projectCategoryIds) {
        typedi_1.default.get(projectsMapping_service_1.ProjectsMappingService).createMapping(projectId, projectCategoryIds);
    }
};
ProjectService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=projects.service.js.map