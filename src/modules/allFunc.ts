import {Request,Response} from'express';
import {Car} from'../type/car';
import {User} from'../type/user';
import {Interest} from'../type/intersets';

let cars:Car[]=[];
let users:User[]=[];
let interests:Interest[]=[];

// ************** User Handlers ************

// add user
export function addUser(req:Request,res:Response){
    const{name,age}=req.body;
    const newUser:User={name,age};
    users.push(newUser);
    res.status(201).json({message:`user added!`});
};

// get user by id
export function getUserByIndex(req:Request,res:Response){
    const id=parseInt(req.params.id);
    const user=users[id];
    if(user){
        res.status(200).json(user);
    }
    else{
        res.status(404).json({message:"user not found!"});
    }
};

// delete user
export function deleteUser(req:Request,res:Response){
    const id=parseInt(req.params.id);
    const findUser=users[id];
    if(findUser){
        users.splice(id,1);
        res.status(200).json({message:"user deleted"});
    }
    else{
        res.status(404).json({message:"user not found"});
    }
};

// ************** Car Handlers ************

// add car
export function addCar(req:Request,res:Response){
    const{brand,model,carClass}=req.body;
    const newCar:Car={brand,model,carClass};
    cars.push(newCar);
    res.status(201).json({message:`car added!`});
};

// get all cars
export function getCars(req:Request,res:Response){
    res.status(200).json(cars);
};

// get car by id
export function getCarById(req:Request,res:Response){
    const id=parseInt(req.params.id);
    const car=cars[id];
    if(car){
        res.status(200).json(car);
    }
    else{
        res.status(404).json({message:"car not found"});
    }
};

// delete car
export function deleteCar(req:Request,res:Response){
    const id=parseInt(req.params.id);
    const findCar=cars[id];
    if(findCar){
        cars.splice(id,1);
        res.status(200).json({message:"car deleted"});
    }
    else{
        res.status(404).json({message:"car not found"});
    }
};

//************* Interest Handlers *************

// add interest
export function addUserInterset(req:Request,res:Response){
    const{user,car}=req.body;
    const newInterest:Interest={user,car};
    interests.push(newInterest);
    res.status(201).json({message:"user interest added!"});
};

// get user interests by id
export function getUserIntersetByIndex(req:Request,res:Response){
    const id=parseInt(req.params.id);
    const userInterests=interests[id];
    if(!userInterests){
        return res.status(404).json({message:"user interests not found"});
    }
    else{
        res.status(200).json(userInterests);
    }
};
