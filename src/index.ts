import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const client = new PrismaClient({ adapter });
const app = express();

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json({
    users,
  });
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const todos = await client.user.findFirst({
    where: {
      id: parseInt(id),
    },
    select: {
      todos: true,
      username: true,
      password: true,
    },
  });
  res.json({ todos });
});
app.listen(3000);
