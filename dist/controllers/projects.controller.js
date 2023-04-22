"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const typedi_1 = require("typedi");
const projects_service_1 = require("../services/projects.service");
class ProjectController {
    constructor() {
        this.project = typedi_1.Container.get(projects_service_1.ProjectService);
        this.getProjects = async (req, res, next) => {
            try {
                const findAllProjectsData = await this.project.findAllProject();
                res.status(200).json({ data: findAllProjectsData });
            }
            catch (error) {
                next(error);
            }
        };
        this.getProjectById = async (req, res, next) => {
            try {
                const projectId = req.params.id;
                const findProjectData = await this.project.findProjectById(projectId);
                res.status(200).json({ data: findProjectData });
            }
            catch (error) {
                next(error);
            }
        };
        this.createProject = async (req, res, next) => {
            try {
                const projectData = req.body;
                const createProjectData = await this.project.createProject({
                    name: projectData.name,
                    description: projectData.description,
                    price: projectData.price,
                    author_id: projectData.author_id,
                    status: projectData.status,
                });
                await this.project.addCategoriesToProject(createProjectData.id, req.body.project_category_ids);
                res.status(201).json({ data: createProjectData });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateProject = async (req, res, next) => {
            try {
                const projectId = req.params.id;
                const projectData = req.body;
                const updateProjectData = await this.project.updateProject(projectId, projectData);
                res.status(200).json({ data: updateProjectData });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteProject = async (req, res, next) => {
            try {
                const projectId = req.params.id;
                const deleteProjectData = await this.project.deleteProject(projectId);
                res.status(200).json({ data: deleteProjectData });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.ProjectController = ProjectController;
//# sourceMappingURL=projects.controller.js.map