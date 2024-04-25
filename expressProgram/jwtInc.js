const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const ALL_USER = [
  {
    name: "Ankit",
    username: "Ankit Mukhia",
    password: "AnkitMukhia1234#$@"
  },
  {
    name: "John",
    username: "JohnDoe",
    password: "DoeJohn9876!@#"
  },
  { 
    name: "Alice",
    username: "AliceSmith",
    password: "SmithAlice#$%^"
  }
]

const userExists =  (username, password) => {
    for(let i = 0; i < ALL_USER.length; i++){
       if(ALL_USER[i].username === username && ALL_USER[i].password ===  password){
         return true
       }
    }
   return false
};

app.post("/signup", (req, res) => {
   const {username, password} = req.body;
   
   if(!userExists(username, password)){
     return res.status(403).json({
       msg: "User dosen't exist"
     })
   }

   const token = jwt.sign({username: username}, "hhhhhhh");
   return res.json({
     msg: token
   })
})

app.get("/login", (req, res) => {
  const token = req.headers.authorization;
  try{
    const decode = jwt.verify(token, "hhhhhhh");
	  res.json({
            user: ALL_USER
	  })
  }catch(err) {
   return res.json({
     msg: "Password dose't match"
   })
  }
})

app.listen(3000, () => {
   console.log("App is running at port 3000");
 })
