import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017`);
    console.log(`DB Connected at host :${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error! while connecting to DB", error);
    process.exit(1);
  }
};
export default connDB;
