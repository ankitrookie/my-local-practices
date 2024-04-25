import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUsers = async (username: string, password: string, firstName: string, lastName: string, email: string) => {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
      email
    }
  })
  console.log(res);
}

insertUsers("priyashna", "priyasha", "priyashnaaa", "mukhie", "priyashna@gmail.com");



