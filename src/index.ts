import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get('/getUser', async (req, res) => {
    const users = await prisma.user.findMany();
    return res.json({
        data: users
    }) 
})



app.post('/postUser', async (req, res) => {
    const users = await prisma.user.create({
        data: {
            name: (Math.random() * 10).toString(), 
            password: (Math.random() * 10).toString()
        }
    });
    return res.json({
        data: users
    }) 
})



app.listen(3000, () => {
    console.log("start...")
});