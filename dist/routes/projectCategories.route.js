"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCategoryRoute = void 0;
const express_1 = require("express");
const projectCategories_controller_1 = require("../controllers/projectCategories.controller");
const projectCategories_dto_1 = require("../dtos/projectCategories.dto");
const validation_middleware_1 = require("../middlewares/validation.middleware");
class ProjectCategoryRoute {
    constructor() {
        this.path = '/project_categories';
        this.router = (0, express_1.Router)();
        this.projectCategory = new projectCategories_controller_1.ProjectCategoryController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.projectCategory.getProjectCategories);
        this.router.get(`${this.path}/:id`, this.projectCategory.getProjectCategoryById);
        this.router.post(`${this.path}`, (0, validation_middleware_1.ValidationMiddleware)(projectCategories_dto_1.CreateProjectCategoryDto), this.projectCategory.createProjectCategory);
        this.router.put(`${this.path}/:id`, (0, validation_middleware_1.ValidationMiddleware)(projectCategories_dto_1.UpdateProjectCategoryDto), this.projectCategory.updateProjectCategory);
        this.router.delete(`${this.path}/:id`, this.projectCategory.deleteProjectCategory);
    }
}
exports.ProjectCategoryRoute = ProjectCategoryRoute;
//# sourceMappingURL=projectCategories.route.js.map