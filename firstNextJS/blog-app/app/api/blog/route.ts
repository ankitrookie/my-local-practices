import { PrismaClient } from "@prisma/client/edge";
import { type NextRequest, NextResponse } from "next/server"

export const GET = () => {
  return NextResponse.json({
    email: "Ankit Mukhia",
    password: "password"
  })
}

