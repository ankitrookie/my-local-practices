import { getClient } from "./utils";

const createEntries = async () => {
  const client = await getClient();
  const insertUserText = "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id";
  const iuserValues = ["ankitmukhiaaa@gmail.com", "hashed-password_here"];

  let response = await client.query(insertUserText, iuserValues);
  // this doller signa and bunch of number are for preventing sql injection.
  const insertTodoText = "INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id";
  const todoValues = ['buing groceries', 'Milk bread and egge', response.rows[0].id, false];
  await client.query(insertTodoText, todoValues);

  console.log("Rntries created!")
};

createEntries();
