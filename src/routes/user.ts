import {Router} from 'express';
import {addUser,getUserByIndex,deleteUser} from '../modules/allFunc';

export const userRouter = Router();

userRouter.post('/',addUser);
userRouter.get('/:id',getUserByIndex);
userRouter.delete('/:id',deleteUser);






