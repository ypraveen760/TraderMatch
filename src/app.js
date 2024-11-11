const express = require("express");
const port = 4000;
const app = express();
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
app.use("/test", (req, res) => {
  res.send("This is admin pannel for testing purpose ");
});
//this will only handle get call to /user
app.get("/user", (req, res) => {
  res.send({
    firstName: "Praveen",
    lastName: "Yadav",
  });
});
//this will match all the call
app.use("/", (req, res) => {
  res.send("Hello from Server......");
});
