"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("@/app");
const auth_route_1 = require("@routes/auth.route");
const users_route_1 = require("@routes/users.route");
const userProfile_route_1 = require("@routes/userProfile.route");
const validateEnv_1 = require("@utils/validateEnv");
const projects_route_1 = require("./routes/projects.route");
const propositions_route_1 = require("./routes/propositions.route");
const offers_route_1 = require("./routes/offers.route");
const projectCategories_route_1 = require("./routes/projectCategories.route");
(0, validateEnv_1.ValidateEnv)();
const routes = [];
routes.push(new auth_route_1.AuthRoute());
routes.push(new users_route_1.UserRoute());
routes.push(new userProfile_route_1.UserProfileRoute());
routes.push(new projects_route_1.ProjectRoute());
routes.push(new propositions_route_1.PropositionRoute());
routes.push(new offers_route_1.OfferRoute());
routes.push(new projectCategories_route_1.ProjectCategoryRoute());
const app = new app_1.App(routes);
app.listen();
//# sourceMappingURL=server.js.map