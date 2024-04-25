import React from "react";

import { useIsOnline } from "./useIsOnline";

export const Online = () => {
  const isOnline = useIsOnline();

  return (
     <div>
        <h1>{isOnline ? "Online" : "offline"}</h1>
     </div>
  )
}
