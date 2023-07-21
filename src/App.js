import { useState } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);

  return (
    <div className="App">
      <h1>Hello from {emotion}!</h1>
      <button onClick={() => setEmotion(emotion != "sad" ? "sad" : "happy")}>{emotion != "sad" ? "Sad" : "Happy"}</button>
      <button onClick={() => setEmotion(emotion != "excited" ? "excited" : "happy")}>{emotion != "excited" ? "Excited" : "Happy"}</button>
    </div>
  );
}

export default App;
