import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { UserProfileRoute } from '@routes/userProfile.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();
const routes = [];
routes.push(new AuthRoute());
routes.push(new UserRoute());
routes.push(new UserProfileRoute());

const app = new App(routes);

app.listen();
