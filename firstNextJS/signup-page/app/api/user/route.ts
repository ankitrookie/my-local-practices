import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  await prisma.user.create({
    data: {
      email: body.email,
      password: body.password
    }
  })

  return Response.json({
    message: "You are logged in."
  })
}

export const GET = () => {
  return Response.json({
    message: "It is basically reching"
  })
}
