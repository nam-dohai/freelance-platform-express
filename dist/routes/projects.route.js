"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoute = void 0;
const express_1 = require("express");
const projects_controller_1 = require("@/controllers/projects.controller");
const projects_dto_1 = require("@dtos/projects.dto");
const validation_middleware_1 = require("@middlewares/validation.middleware");
class ProjectRoute {
    constructor() {
        this.path = '/projects';
        this.router = (0, express_1.Router)();
        this.project = new projects_controller_1.ProjectController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.project.getProjects);
        this.router.get(`${this.path}/:id`, this.project.getProjectById);
        this.router.post(`${this.path}`, (0, validation_middleware_1.ValidationMiddleware)(projects_dto_1.CreateProjectDto), this.project.createProject);
        this.router.put(`${this.path}/:id`, (0, validation_middleware_1.ValidationMiddleware)(projects_dto_1.UpdateProjectDto), this.project.updateProject);
        this.router.delete(`${this.path}/:id`, this.project.deleteProject);
    }
}
exports.ProjectRoute = ProjectRoute;
//# sourceMappingURL=projects.route.js.map