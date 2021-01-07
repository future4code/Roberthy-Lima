//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]


app.get("/user", (req: Request, res: Response) => {
    let errCode: number = 400;
    try {
        const name: string = req.query.name as string;

        if (!name) {
            errCode = 422;
            throw new Error("Invalid name! Please, try again.");
        }

        const myUser = users.find(((u: user) => u.name.toLowerCase() === name.toLowerCase()));
        if (!myUser) {
            errCode = 404;
            throw new Error("User not found!");
        }

        const result = myUser;
        res.status(200).send(result);

    } catch (err) {
        res.status(errCode).send(err.message);
    }

});

// BUSCAR POR NOIME
app.get("/user/:name", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {

        const name: string = req.params.name as string;

        if(!String(name)) {
            errorCode = 422;
            throw new Error("Invalid name!");
        }

        const myUser = users.find(((u: user) => u.name === String(name)));

        if (!myUser) {
            errorCode = 404;
            throw new Error("User not found!");
        }

        const result = myUser;
        res.status(200).send(result);

    } catch (error) {
        res.status(errorCode).send(error.message);
    }

});

// CRIAR USUARIO
app.post("/user", (req: Request, res: Response)=>{

    let errCode: number = 400;

    try {

        const reqBody: user = {
            id: Date.now(),
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age,
        }

        if(!reqBody.age || !reqBody.email || !reqBody.type || !reqBody.name){
            errCode = 422;
            throw new Error("Something is wrong! Check the fields and try again.");
        }

        users.push(reqBody);
    
        res.status(200).send({message: "User created!"});
        
    } catch (error) {
        res.status(errCode).send({message: error.message});
    }

});

// ALTERAR NOME
app.put("/user/:id", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {
        const reqBody: {id: number, name: string} = {
            id: Number(req.params.id),
            name: req.body.name
        }

        if(!reqBody.name){
            errorCode = 422;
            throw new Error("Invalid name! Try again.");
        }

        if(isNaN(Number(reqBody.id))) {
            errorCode = 422;
            throw new Error("Invalid ID");
        }

        const myUserIndex = users.findIndex(((u: user) => u.id === Number(reqBody.id)));

        if (myUserIndex === -1) {
            errorCode = 404;
            throw new Error("User not found!");
        }

        users[myUserIndex].name = reqBody.name;
    
        res.status(200).send({message: "User info updated!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }

});

app.delete("/user/:id", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {

        const id: string = req.params.id as string;

        if(isNaN(Number(id))) {
            errorCode = 422;
            throw new Error("Invalid ID");
        }

        const myUser = users.find(((u: user) => u.id === Number(id)));

        if (!myUser) {
            errorCode = 404;
            throw new Error("User not found!");
        }

        const result = myUser;
        res.status(200).send(result);

    } catch (error) {
        res.status(errorCode).send(error.message);
    }

});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
