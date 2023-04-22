import { App } from './app';
import { AuthRoute } from './routes/auth.route';
import { UserRoute } from './routes/users.route';
import { UserProfileRoute } from './routes/userProfile.route';
import { ValidateEnv } from './utils/validateEnv';
import { ProjectRoute } from './routes/projects.route';
import { PropositionRoute } from './routes/propositions.route';
import { OfferRoute } from './routes/offers.route';
import { ProjectCategoryRoute } from './routes/projectCategories.route';

ValidateEnv();
const routes = [];
routes.push(new AuthRoute());
routes.push(new UserRoute());
routes.push(new UserProfileRoute());
routes.push(new ProjectRoute());
routes.push(new PropositionRoute());
routes.push(new OfferRoute());
routes.push(new ProjectCategoryRoute());

const app = new App(routes);

app.listen();
