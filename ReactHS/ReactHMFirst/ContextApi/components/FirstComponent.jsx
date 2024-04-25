import React from "react";
import { NameContext } from "../src/context";

export const FirstComponent = () => {
  const name = React.useContext(NameContext);

  return (
      <div>{name}</div>
  )
}
