import React, { useState } from "react";

import { useInterval } from "./useInterval";

export const IsIntervalComponent = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((prv) => prv +1)
  }, 1000);

  return (
    <div>count is now {count}</div>
  )
}
