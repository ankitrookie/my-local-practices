const express = require("express");
const port = 3000;

const app = express();
let user = [{
   name: "Ankit Mukhia",
   Kidneys : [
    heltheyKidneys = false
   ]
}];

app.use(express.json());

app.get("/", (req, res) => {
   const kidneys = user[0].Kidneys;
   const numberOfKidneys = kidneys.length;
   let numberOfHealthyKidneys = 0;
	for(let i = 0; i < numberOfKidneys; i++){
          if(kidneys[i].heltheyKidneys){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
	  }
	}
    res.json({
      numberOfKidneys,
      numberOfHealthyKidneys
    })
})

app.post("/", (req, res) => {
   const isHealthy = req.body.isHealthy;
	user[0].Kidneys.push({
           heltheyKidneys: isHealthy
	})
	res.json({
          msg: "Done"
	})
});

app.put("/", (req, res) => {
   for(let i = 0; i < user[0].Kidneys.length; i++){
      user[0].Kidneys[i].heltheyKidneys = true;
   }
   res.json({})
});

app.delete("/", (req, res) => {
   
})

app.listen(port, () => {
  console.log(`Port is runnning in port ${port}`);
})
