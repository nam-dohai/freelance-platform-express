"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCategoryController = void 0;
const typedi_1 = require("typedi");
const projectCategories_service_1 = require("@services/projectCategories.service");
class ProjectCategoryController {
    constructor() {
        this.projectCategory = typedi_1.Container.get(projectCategories_service_1.ProjectCategoryService);
        this.getProjectCategories = async (req, res, next) => {
            try {
                const findAllProjectCategoriesData = await this.projectCategory.findAllProjectCategories();
                res.status(200).json({ data: findAllProjectCategoriesData });
            }
            catch (error) {
                next(error);
            }
        };
        this.getProjectCategoryById = async (req, res, next) => {
            try {
                const projectCategoryId = req.params.id;
                const findProjectCategoryData = await this.projectCategory.findProjectCategoryById(projectCategoryId);
                res.status(200).json({ data: findProjectCategoryData });
            }
            catch (error) {
                next(error);
            }
        };
        this.createProjectCategory = async (req, res, next) => {
            try {
                const projectCategoryData = req.body;
                const createProjectCategoryData = await this.projectCategory.createProjectCategory(projectCategoryData);
                res.status(201).json({ data: createProjectCategoryData });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateProjectCategory = async (req, res, next) => {
            try {
                const projectCategoryId = req.params.id;
                const projectCategoryData = req.body;
                const updateProjectCategoryData = await this.projectCategory.updateProjectCategory(projectCategoryId, projectCategoryData);
                res.status(200).json({ data: updateProjectCategoryData });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteProjectCategory = async (req, res, next) => {
            try {
                const projectCategoryId = req.params.id;
                const deleteProjectCategoryData = await this.projectCategory.deleteProjectCategory(projectCategoryId);
                res.status(200).json({ data: deleteProjectCategoryData });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.ProjectCategoryController = ProjectCategoryController;
//# sourceMappingURL=projectCategories.controller.js.map