import express, { Request, Response } from 'express';
import cors from 'cors';


import { AddressInfo } from "net";

const app = express();


app.use(express.json());
app.use(cors());


type account = {
    name: string,
    cpf: string,
    age: number,
    balance: number
}

let accounts: account[] = [
    {
        name: "Rhuan Gonçalves",
        cpf: "12312312321",
        age: 20,
        balance: 0
    }
]

app.post("/accounts", (req: Request, res: Response)=>{

    let errorCode: number = 400;

    try {

        const reqBody: account = {
            name: req.body.name,
            cpf: req.body.cpf,
            age: req.body.age,
            balance: 0
        }

        if(!reqBody.age || !reqBody.name || !reqBody.cpf ||  reqBody.cpf.length != 11 ){
            errorCode = 422;
            throw new Error("Algum campo está inválido. Preencha corretamente.");
        }

        

        if(reqBody.age < 18){
            errorCode = 422;
            throw new Error("É necessário ser maior de 18 anos para criar uma conta!.");
        }

        accounts.push(reqBody);
    
        res.status(200).send({message: "Conta criada com sucesso!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }

});

app.get("/accounts/:cpf", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {

        const cpf = String(req.params.cpf)

        if(isNaN(Number(cpf))) {
            errorCode = 422;
            throw new Error("CPF inválido");
        }

        const myAccount = accounts.find(((a: account) => a.cpf === String(cpf)));

        if (!myAccount) {
            errorCode = 404;
            throw new Error("CPF não encontrado");
        }

        const result = myAccount;
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