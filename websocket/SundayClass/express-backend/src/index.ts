import express from "express";
import { createClient } from "redis";
const app = express();
app.use(express.json());
const client = createClient();
client.connect();


app.post('/', (req, res) => {
  const { problemId, userid, code, language } = req.body;

  try {

  } catch (e) {

  }
})

app.listen(3000)
