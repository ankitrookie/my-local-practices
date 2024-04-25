"use client";

import { useSession } from "next-auth/react"

export const AppBar = () => {
  const session = useSession()
  return <div>
    {JSON.stringify(session)}
  </div>
}
