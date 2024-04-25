"use client";

import { solve } from "@/app/api/actions/user";
import axios from "axios";
import { useState } from "react"

export const Signup = () => {
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: ""
  });

  return <div>
    Signup

    <div className="flex justify-center item-center border">
      <input type="text"
        onChange={(e) =>
          setUserInputs({
            ...userInputs, email: e.target.value
          })}
        placeholder="email">
      </input>
      <br />
      <input
        type="text"
        onChange={(e) => setUserInputs({
          ...userInputs, password: e.target.value
        })}
        placeholder="password">
      </input>

      <button
        className="bg-[#a3a3a3] p-2 rounded-lg w-full"
        onClick={async () => {
          //  axios.post("http://localhost:3000/api/user", {
          //    email: userInputs.email,
          //    password: userInputs.password
          //  })
          const email = userInputs.email;
          const password = userInputs.password;

          const res = await solve(email, password);
          console.log(res)
        }}
      >Submit</button>
    </div>
  </div>
}
