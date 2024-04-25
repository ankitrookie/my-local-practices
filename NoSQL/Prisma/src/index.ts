import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

const create = async ({ username, password, firstName, lastName }: User) => {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName
    }
  })
  console.log(res);
}

interface Update {
  firstName: string;
  lastName: string;
}

const update = async (username: string, { firstName, lastName }: Update) => {
  const res = await prisma.user.update({
    where: {
      username
    },
    data: {
      firstName,
      lastName
    }
  })
  console.log(res);
}

const deleteUser = async (username: string) => {
  const res = await prisma.user.delete({
    where: {
      username
    }
  })
  console.log(res);
}

const getUser = async (username: string) => {
  const res = await prisma.user.findFirst({
    where: {
      username
    }
  })
  console.log(res);
}


