const jwt = require('jsonwebtoken');

const user = {
  name: "Ankit Mukhia",
  password: 1234
};

const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5raXQgTXVraGlhIiwicGFzc3dvcmQiOjEyMzQsImlhdCI6MTcwODcwNjIwN30.rY4NMEgqQxFMwCMMa_WinjMM7stXYz-TMNDvyec2Jbw", "daaaaa
clear);
console.log(token);
