import express, {Request, Response, NextFunction} from 'express'
import dotenv from 'dotenv';
import { buildClient } from '@xata.io/client';
import userRoutes from "./routes/router";
import { getXataClient } from './xata';

dotenv.config();
const app =express();
const PORT = 3300

const client = getXataClient();
app.use(express.json());


export interface UserRecord{
    name:string;
    email:string;
    password:string;
    person_id:string;
}

app.use('/', userRoutes);

app.listen(PORT, async ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})