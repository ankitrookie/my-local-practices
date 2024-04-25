import { Signup } from "@/components/Signup";
import Simple from "@/components/Simple";
import axios from "axios";

const getUserDetails = async () => {
  await new Promise((c) => setTimeout(c, 5000));
  const res = await axios.get("http://localhost:3000/api/user");
  return res.data;
};

export default async function() {
  const userData = await getUserDetails();

  return <Signup />
}


{/* <div> */ }
{/*   this is my email, {userData.email} <br /> */ }
{/*   this is my password, {userData.password} */ }
{/*   <div className="mt-5"> */ }
{/*     <Simple /> */ }
{/*   </div> */ }
{/* </div> */ }

