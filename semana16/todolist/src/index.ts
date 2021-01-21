import express, { Express, Request, Response } from "express";
import knex from "knex";
import Knex from 'knex'
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// endpoints aqui

// const user = (() => {
   
// })

const createUser = async (user: any): Promise<void> => {
   try {

      const id = 0;

      await connection.raw(`
         INSERT INTO Users (id, name, nickname, email)
         VALUES(
            ${user.id},
            "${user.name}",
            "${user.nickname}",
            "${user.email}"
         );
      `)

      console.log("Usuário criado com sucesso!")
      
   } catch (error) {
      console.log(error.sqlMessage || error.message)
   }
}

app.put("/user", async (req: Request, res: Response) => {
   try {

      const {id, name, nickname, email } = req.body;

      const myUser: any = {
         id,
         name,
         nickname,
         email
      };

      if (!name || !nickname || !email) {
         console.log("Preencha todos os campos corretamente!")
      }

     await createUser(myUser);

      res.status(201).send("Usuário criado com sucesso!");
   } catch (error) {
      res.status(400).send(error.message)
   }
});

async function getAllUsers(): Promise<any> {
   try {

      const result: any = await connection.raw(`
         SELECT * from Users;
      `);

      return result[0];
      
   } catch (error) {
      console.log(error.sqlMessage || error.message);
   }
}


app.get("/user/:id", (req: Request, res: Response) => {
   let errorCode: number = 400;
   try {

      const user: any = connection.raw(`
      SELECT * from Users;
      `);

       const id: string = req.params.id as string;

       if(isNaN(Number(id))) {
           errorCode = 422;
           throw new Error("Id inválido");
       }

       const myUser = user.find(((u: any) => u.id === Number(id)));

       if (!myUser) {
           errorCode = 404;
           throw new Error("Usuário não encontrado");
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
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
