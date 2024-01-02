const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome To Home Page !");
});

app.get("/twitter", (req, res) => {
  res.send("welcome to twitter pages!");
});

app.get("/profile", (req, res) => {
  const data = {
    name: "dharti",
    lname: "dudhat",
  };
  res.json(data);
});

app.get('/name',(req, res)=>{
    res.send('<h1>Hello Dharti page !')
})

app.listen(port, () => {
  console.log(`App listen on Port ${port}`);
});
