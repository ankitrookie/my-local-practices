import mongoose from "mongoose";

mongoose.connect("mongodb://ankit_mongo:27017/mydatabase")
  .then(() => console.log("mongodb connected"))
  .catch(() => console.log("error connecting dudue."))

interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string
}

const userSchema = new mongoose.Schema<IUser>({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: String
});

const User = mongoose.model<IUser>("User", userSchema);

export { User };
