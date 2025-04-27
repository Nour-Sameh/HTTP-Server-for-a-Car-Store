import {Router} from 'express';
import {addUserInterset,getUserIntersetByIndex} from '../modules/allFunc';

export const interestsRouter = Router();

interestsRouter.post('/',addUserInterset);
interestsRouter.get('/:id',getUserIntersetByIndex);





