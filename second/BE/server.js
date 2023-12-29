import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Home Page !");
});

app.get("/api/joke", (req, res) => {
  const Joke = [
    {
      id: 1,
      name: "Joke1",
      content: "Joke1",
    },
    {
      id: 2,
      name: "Joke2",
      content: "Joke2",
    },
    {
      id: 3,
      name: "Joke3",
      content: "Joke3",
    },
    {
      id: 4,
      name: "Joke4",
      content: "Joke4",
    },
  ];
  res.send(Joke);
});

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
