import { useState, useEffect } from "react";

// import logo from './logo.svg';
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired")

  useEffect(() => {
    console.log(`It's ${emotion} right now.`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here.`);
  }, [secondary]);
  

  return (
    <div className="App">
      <h1>Hello from {emotion}!</h1>
      <button onClick={() => setEmotion(emotion !== "sad" ? "sad" : "happy")}>{emotion !== "sad" ? "Sad" : "Happy"}</button>
      <button onClick={() => setEmotion(emotion !== "excited" ? "excited" : "happy")}>{emotion !== "excited" ? "Excited" : "Happy"}</button>

      <h2>Current secondary emotion is {secondary}.</h2>
      <button onClick={() => setSecondary(secondary !== "grateful" ? "grateful" : "tired")}>{secondary !== "grateful" ? "Grateful" : "Tired"}</button>
    </div>
  );
}

export default App;
