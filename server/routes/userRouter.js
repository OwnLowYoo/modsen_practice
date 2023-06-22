import {Router} from 'express';
import {login, register} from '../controllers/user.js';

// eslint-disable-next-line new-cap
const userRouter = Router();
userRouter.post('/register', register);
userRouter.post('/login', login);

export default userRouter;
