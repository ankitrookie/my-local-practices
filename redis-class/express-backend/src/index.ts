import express, { Request, Response } from "express";
import { createClient } from "redis";
const app = express();
const client = createClient();
app.use(express.json());
const PORT = 3000;

app.post("/submit", async (req: Request, res: Response) => {
	const { code, language, problemId } = req.body;
	try {
		await client.lPush("problems", JSON.stringify({ code, language, problemId }));
		res.status(200).json("Submission received and stored.")
	} catch (error) {
		console.log("Redis error", error);
		res.status(500).json("Submission failed : ")
	}
});

const startServer = async () => {
	try {
		await client.connect();
		console.log("Connected to Redis");

		app.listen(PORT, () => {
			console.log(`PORT is runnig at http://localhost:${PORT}`);
		});

	} catch (error) {
		console.log("Faild to connect to Redis", error)
	}
};

startServer();

