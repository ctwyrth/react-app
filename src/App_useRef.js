import { useRef } from "react";

// import logo from './logo.svg';
import './App.css';

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();
  console.log(hexColor);

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color =  hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = hexColor.current.defaultValue;
  };

  return (
    <form action="/" onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." />
      <input ref={hexColor} type="color" name="color" id="color" defaultValue="#ff0000" />
      <button>ADD</button>
    </form>
  );
}

export default App;
