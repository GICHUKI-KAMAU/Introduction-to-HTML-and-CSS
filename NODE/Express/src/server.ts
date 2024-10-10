import express, {Request, Response, NextFunction} from 'express'
import dotenv from 'dotenv';
import { buildClient } from '@xata.io/client';
import { getXataClient } from './xata';

dotenv.config();
const app =express();
const PORT = 3300

const client = getXataClient();
app.use(express.json());


interface RegistrationRequest{
    name:string;
    email:string;
    password:string;
    person_id:string;
}

app.get('/', (req:Request, res:Response)=>{
    res.send('Health check');
})

app.get('/users', async (req:Request, res:Response)=>{
    try{
        const personData = await client.db.users.getAll();
        res.send(personData);
    }catch(error){
        console.error(`Error: ${error}`);
        res.status(500).send("An error occurred when retrieving data")
    }
})
app.get('/users/:name',async (req:Request, res:Response) =>{
    const personName:string = req.params.name.toLowerCase();

    try{
        const personData =await client.db.users.getAll();
        const personFound = personData.find(person => person.name?.toLowerCase() === personName);
        if(personFound){
            res.send(personFound)
        }else{
            res.status(404).send("Person not found")
        }
    }catch(Error){
        console.log(`Error fetching data for person ${personName}: ${Error}`);
    }
})


app.post('/register',async(req:Request, res:Response) =>{
    const {email, password, name, person_id} = req.body;

    if(!email|| !password || !name || !person_id){
        res.status(400).json({message:"All fields are required"});
    }
    // const client= getXataClient();

    try{
        await client.db.users.create({
            email,password:password, name, person_id
        });
        res.status(201).json({message:'User registered successfully'})
    {

    }}catch(error){
        res.status(500).json({message:'Internal server error' })
    }
})



app.delete('/users/:email', async(req:Request, res:Response)=>{
    const personEmail:string = req.params.email.toLocaleLowerCase();

    
    try{
        const personData =await client.db.users.filter({email:personEmail}).getFirst();

        if(!personData){
            res.status(404).json({message:"user not found"})
        }else{
            await client.db.users.delete(personData.xata_id || personData.email);
            res.status(200).json({message:"User deleted successfully.."})
        }
    }catch(Error){
        console.log(`Error deleting user ${personEmail}: ${Error}`);
        res.status(500).json({message:"Internal server error"})
    }
})


app.listen(PORT, async ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})