import { useState } from "react";

// import logo from './logo.svg';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#ff0000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#ff0000");
  };

  return (
    <form action="/" onSubmit={submit}>
      <input type="text" placeholder="color title..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="color" name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <button>ADD</button>
    </form>
  );
}

export default App;
