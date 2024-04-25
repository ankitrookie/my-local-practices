import React, { useEffect } from "react";

export const useInterval = (countFun, timer) => {

  useEffect(() => {
    const intervalid = setInterval(countFun, timer);

    return () => clearInterval(intervalid);

  }, [countFun, timer])

  return useInterval;
}
