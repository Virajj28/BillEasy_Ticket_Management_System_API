import { Router } from 'express';
import sequelize from '../models';
import bcrypt from "bcrypt";
import { QueryTypes } from 'sequelize';

const userRouter = Router();

userRouter.post("/", async (req, res) => {
    const body = req.body;
    const replacements = {
        name: body.name,
        email: body.email,
        type: body.type,
        password: bcrypt.hashSync(body.password, 10)
    }
    const query = `
      INSERT INTO users (name,email, type, password) 
      VALUES (:name,:email,:type, :password);
    `;
    const data = await sequelize.query(query, {
        replacements,
        type: QueryTypes.RAW,
      });
    console.log(data);
    res.send("User Created");
})

export default userRouter;