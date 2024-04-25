import express, { Express, Request, Response } from "express";

const app: Express = express();
import { URL } from "@repo/common/config";

console.log(URL)

app.get("/", (req: Request, res: Response) => {
  res.send("Hi, there!");
})

app.listen(3000, () => {
  console.log(`PORT os running at http://localhost:3000`)
});
