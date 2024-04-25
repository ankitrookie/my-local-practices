const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const data = [
  {
    id: 1,
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    etc: "Other data 1"
  },
  {
    id: 2,
    title: "Dolor Sit Amet",
    description: "Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    etc: "Other data 2"
  },
  {
    id: 3,
    title: "Consectetur Adipiscing",
    description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    etc: "Other data 3"
  },
  {
    id: 4,
    title: "Sed Do Eiusmod",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    etc: "Other data 4"
  },
  {
    id: 5,
    title: "Ut Labore Et Dolore",
    description: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    etc: "Other data 5"
  },
  {
    id: 6,
    title: "Quis Nostrud",
    description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    etc: "Other data 6"
  },
  {
    id: 7,
    title: "Exercitation Ullamco",
    description: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    etc: "Other data 7"
  },
  {
    id: 8,
    title: "Duis Aute Irure",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    etc: "Other data 8"
  },
  {
    id: 9,
    title: "Excepteur Sint Occaecat",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    etc: "Other data 9"
  },
  {
    id: 10,
    title: "Labore Et Dolore",
    description: "Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    etc: "Other data 10"
  },
  // Add more objects as needed
];


app.get('/data/:id', (req, res) => {
   const { id } = req.params;
   
  const findData = data.find(ids => ids.id == id);

  res.send({
    data: findData
  })
})

app.listen(3000, () => {
  console.log("Port is running at 3000");
})
