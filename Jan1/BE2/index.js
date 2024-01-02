import express from "express";
import cors from "cors";
const app = express();

// app.use(cors())
app.use(express.static('dist'))

app.get("/", (req, res) => {
  res.send("welcome to page !");
});

app.get("/api/joke", (req, res) => {
  const joke = [
    {
      id: 1,
      title: "Joke1",
      content: "This is Joke1 content",
    },
    {
      id: 2,
      title: "Joke2",
      content: "This is Joke2 content",
    },
    {
      id: 3,
      title: "Joke3",
      content: "This is Joke3 content",
    },
    {
      id: 4,
      title: "Joke4",
      content: "This is Joke4 content",
    },
    {
      id: 5,
      title: "Joke5",
      content: "This is Joke5 content",
    },
  ];

  res.send(joke)
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
