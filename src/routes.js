import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import authMiddleware from './app/middlewares/auth';
import authorizationMiddleware from './app/middlewares/authorization';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);
routes.use(authorizationMiddleware);

routes.put('/users', UserController.update);
routes.get('/users', UserController.getUser);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

routes.get('/deliverymen', RecipientController.store);
routes.post('/deliverymen', RecipientController.store);
routes.put('/deliverymen/:id', RecipientController.store);
routes.delete('/deliverymen/:id', RecipientController.store);

export default routes;
