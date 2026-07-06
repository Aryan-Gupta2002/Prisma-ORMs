import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";
import dotenv from "dotenv";
dotenv.config();
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const client = new PrismaClient({ adapter });

async function createUser() {
  await client.user.create({
    data: {
      username: "ActonidePrime",
      password: "123123",
      age: 23,
    },
  });
}
findUser();

async function findUser() {
  const res = await client.user.findFirst({
    where: {
      username: "ActonidePrime",
    },
  });
  console.log(res);
}
