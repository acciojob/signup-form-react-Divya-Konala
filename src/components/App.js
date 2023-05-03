import React, {Component, useState} from "react";
import '../styles/App.css';
import Form from "./Form";
import Welcome from "./Welcome";

const App = () => {
  const [username,setUsername]=useState(null);
  return (
    <div id="main">
      {
        (!username)
        ?<Form setUsername={setUsername}/>
        :<Welcome username={username} />
      }
    </div>
  )
}


export default App;
