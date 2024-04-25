import { getClient } from "./utils";

const createTable = async () => {
  const client = await getClient();
  const createUserTableQuery = `
         CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
   `;

  await client.query(createUserTableQuery);

  const createTodoQuery = `
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        );
    `;

  // we use this syntex to send all above query to postgress data base
  await client.query(createTodoQuery);

  console.log("Table created successfully!");
};


createTable();
