import express, { Request, Response, Express } from "express";
const app: Express = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.json({
		message: "Got it!"
	});
})

app.listen(PORT, () => {
	console.log(`PORT is running at http:localhost:${PORT}`);
})
