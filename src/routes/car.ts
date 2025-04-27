import {Router} from 'express';
import {getCars,addCar,deleteCar,getCarById} from '../modules/allFunc';

export const carRouter = Router();

carRouter.get('/',getCars);
carRouter.post('/',addCar);
carRouter.delete('/:id',deleteCar);
carRouter.get('/:id',getCarById);





