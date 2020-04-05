import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import File from './app/controllers/FileController';
import Deliveryman from './app/controllers/DeliverymanController';

import authMiddleware from './app/middlewares/auth';
import authorizationMiddleware from './app/middlewares/authorization';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);
routes.use(authorizationMiddleware);

routes.put('/users', UserController.update);
routes.get('/users', UserController.getUser);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

routes.get('/deliverymen', Deliveryman.index);
routes.post('/deliverymen', Deliveryman.store);
routes.put('/deliverymen/:id', Deliveryman.update);
routes.delete('/deliverymen/:id', Deliveryman.delete);

routes.post('/files', upload.single('file'), File.store);

export default routes;
