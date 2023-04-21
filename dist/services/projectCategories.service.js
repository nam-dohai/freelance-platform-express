"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCategoryService = void 0;
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const httpException_1 = require("@exceptions/httpException");
const projectCategories_model_1 = require("@models/projectCategories.model");
let ProjectCategoryService = class ProjectCategoryService {
    async findAllProjectCategories() {
        const projectCategories = await projectCategories_model_1.ProjectCategoryModel.query().select().from('project_categories');
        return projectCategories;
    }
    async findProjectCategoryById(projectCategoryId) {
        const findProjectCategory = await projectCategories_model_1.ProjectCategoryModel.query().findById(projectCategoryId);
        if (!findProjectCategory)
            throw new httpException_1.HttpException(409, "ProjectCategory doesn't exist");
        return findProjectCategory;
    }
    async createProjectCategory(projectCategory) {
        const createProjectCategoryData = await projectCategories_model_1.ProjectCategoryModel.query()
            .insert(Object.assign({}, projectCategory))
            .into('project_categories');
        return createProjectCategoryData;
    }
    async updateProjectCategory(projectCategoryId, projectCategoryData) {
        const findProjectCategory = await projectCategories_model_1.ProjectCategoryModel.query()
            .select()
            .from('project_categories')
            .where('id', '=', projectCategoryId);
        if (!findProjectCategory)
            throw new httpException_1.HttpException(409, "ProjectCategory doesn't exist");
        await projectCategories_model_1.ProjectCategoryModel.query()
            .update(Object.assign({}, projectCategoryData))
            .where('id', '=', projectCategoryId)
            .into('project_categories');
        const updateProjectCategoryData = await projectCategories_model_1.ProjectCategoryModel.query()
            .select()
            .from('project_categories')
            .where('id', '=', projectCategoryId)
            .first();
        return updateProjectCategoryData;
    }
    async deleteProjectCategory(projectCategoryId) {
        const findProjectCategory = await projectCategories_model_1.ProjectCategoryModel.query()
            .select()
            .from('project_categories')
            .where('id', '=', projectCategoryId)
            .first();
        if (!findProjectCategory)
            throw new httpException_1.HttpException(409, "ProjectCategory doesn't exist");
        await projectCategories_model_1.ProjectCategoryModel.query().delete().where('id', '=', projectCategoryId).into('project_categories');
        return findProjectCategory;
    }
};
ProjectCategoryService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], ProjectCategoryService);
exports.ProjectCategoryService = ProjectCategoryService;
//# sourceMappingURL=projectCategories.service.js.map