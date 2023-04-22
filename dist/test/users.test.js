"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const app_1 = require("../app");
const users_route_1 = require("../routes/users.route");
afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500));
});
describe('Testing Users', () => {
    describe('[GET] /users', () => {
        it('response statusCode 200 / findAll', () => {
            const usersRoute = new users_route_1.UserRoute();
            const app = new app_1.App([usersRoute]);
            return (0, supertest_1.default)(app.getServer()).get(`${usersRoute.path}`).expect(200);
        });
    });
    describe('[GET] /users/:id', () => {
        it('response statusCode 200 / findOne', () => {
            const userId = 1;
            const usersRoute = new users_route_1.UserRoute();
            const app = new app_1.App([usersRoute]);
            return (0, supertest_1.default)(app.getServer()).get(`${usersRoute.path}/${userId}`).expect(200);
        });
    });
    describe('[POST] /users', () => {
        it('response statusCode 201 / created', async () => {
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4',
            };
            const usersRoute = new users_route_1.UserRoute();
            const app = new app_1.App([usersRoute]);
            return (0, supertest_1.default)(app.getServer()).post(`${usersRoute.path}`).send(userData).expect(201);
        });
    });
    describe('[PUT] /users/:id', () => {
        it('response statusCode 200 / updated', async () => {
            const userId = 1;
            const userData = {
                email: 'test@email.com',
                password: 'q1w2e3r4',
            };
            const usersRoute = new users_route_1.UserRoute();
            const app = new app_1.App([usersRoute]);
            return (0, supertest_1.default)(app.getServer()).put(`${usersRoute.path}/${userId}`).send(userData).expect(200);
        });
    });
    describe('[DELETE] /users/:id', () => {
        it('response statusCode 200 / deleted', () => {
            const userId = 1;
            const usersRoute = new users_route_1.UserRoute();
            const app = new app_1.App([usersRoute]);
            return (0, supertest_1.default)(app.getServer()).delete(`${usersRoute.path}/${userId}`).expect(200);
        });
    });
});
//# sourceMappingURL=users.test.js.map