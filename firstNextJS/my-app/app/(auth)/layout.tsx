import React from "react";

export default function({ children }: {
  children: React.ReactNode
}) {
  return <div>
    20% descount if you signin right now!
    {children}
  </div>
}

// if we define outer folder like this (auth) it will ignore that in path
