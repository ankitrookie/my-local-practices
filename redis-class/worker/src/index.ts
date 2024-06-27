import { createClient } from "redis";
const client = createClient();

async function main() {
	await client.connect();
}

main();
