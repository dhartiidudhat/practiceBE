import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    axios.get("/api/joke").then((response) => {
      setJoke(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }, []);

  return (
    <>
      <h1>Full stack</h1>
      <h3>Jokes:- {joke.length}</h3>
      <h3>Joke</h3>
      <h4>Joke Content</h4>
      {joke.map((joke) => (
        <>
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h4>{joke.content}</h4>
          </div>
        </>
      ))}
    </>
  );
}

export default App;
