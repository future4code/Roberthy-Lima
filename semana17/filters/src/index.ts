import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { recipe } from "./types/recipe";
import { type } from "os";

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

async function selectAllUsers():Promise<any> {

   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
   `)

   return result[0]
}

// async function selectAllUsers():Promise<any> {

//    const result = await connection.raw(`
//       SELECT id, name, email, type
//       FROM aula48_exercicio
//       LIMIT 5
//    `)

//    return result[0]
// }



app.get("/users/search", async (req: Request, res: Response): Promise<void> => {
   try {
      const {
         searchInput,
         orderBy = "name",
         orderType = "DESC",
         page = "1"
      } = req.query;

      const pageNumber: number = Number(page)

      const offset: number = 5 * (pageNumber - 1)

      const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE ${orderBy} LIKE %${searchInput}%
      ORDER BY ${orderBy} ${orderType}
      LIMIT 5 OFFSET ${offset}
   `)

   res.send(result)

   } catch (error) {
      res.send(error.sqlMessage || error.message )
   }
})



app.get("/users/search", async (req: Request, res: Response): Promise<void> => {
   try {
      const {
         name
      } = req.query;

      const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name LIKE %${name}% 
   `)

   res.send(result)

   } catch (error) {
      res.send(error.sqlMessage || error.message )
   }
})

app.get(`/users/search/:userType`, async (req: Request, res: Response): Promise<void> => {
   try {
      
      const userType: string = req.params.userType as string


      const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE type LIKE %${userType}% 
   `)

   res.send(result)

   } catch (error) {
      res.send(error.sqlMessage || error.message )
   }
})

const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await selectAllUsers()

      if(!users.length){
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}



const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});