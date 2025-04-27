import express from 'express';
import {carRouter}from './routes/car';
import {userRouter}from './routes/user';
import {interestsRouter}from './routes/interests';
const app =express();
const port =1234;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('welcome to the car API');
})

app.use('/cars',carRouter);
app.use('/user',userRouter);
app.use('/interests',interestsRouter);

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})