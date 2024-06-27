import express, { Request, Response } from "express";
const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
	res.status(200).json("App is running")
});

app.listen(PORT, () => {
	console.log(`PORT is runnig at http://localhost:${PORT}`)
});

