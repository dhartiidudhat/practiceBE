import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    joke()
    console.log(data);

  },[])

  const joke = async () =>{
    const res = await axios.get('http://localhost:4000/api/joke');
    const data = await res

    console.log("data in ", data);
    setData(data.data)
  }
  return (
    <>
    <h1>Full stack</h1>
    <h4>joke Length :- </h4>
    <h1>Joke</h1>
    <h2>Content</h2>

    {
      data.map((item, index) => (
        <>
        <div key={index}>
          <h1>name:- {item.name}</h1>
          <h2>Content:- {item.content}</h2>
        </div>
        </>
        
      ))
    }

    </>
  )
}

export default App