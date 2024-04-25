export const GET = () => {
  return Response.json({
    email: "ankit@gmail.com",
    password: "ankitmukhia1234#@"
  })
};

// this is equvalent to below

// app.get('/', (req, res) => {
//  res.json({
//    email: "ankitmukhia@gmail.com",
//    password: "ankitmukhia1234"
//  })
//})
