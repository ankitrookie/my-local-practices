import axios from "axios"

export const getAllTodos = async () => {
  try {
    const res = await axios.get("https://6622084327fcd16fa6c88537.mockapi.io/api/todos/todo")
    return res.data
  } catch (error) {
    console.log(error);
    return null;
  }
}
