"use server";
// we have to specefecally mention this "use server" at top, case it a convension to follow,
// else client will treet it like a normal function;

import client from "@/db";

export const solve = async (email: string, password: string) => {
  try {
    await client.user.create({
      data: {
        email,
        password
      }
    })
    return {
      message: "signup successfully!"
    }
  } catch (e) {
    return {
      error: e
    }
  }

}
