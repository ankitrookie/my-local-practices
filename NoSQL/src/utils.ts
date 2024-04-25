import { Client } from "pg";

export async function getClient() {
  const client = new Client("postgres://iqtiveqx:YtOKKYcBTAE3v1BEctXxW3jtcEGqpFWa@bubble.db.elephantsql.com/iqtiveqx")
  await client.connect();
  return client
}
