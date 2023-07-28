import { useState } from "react";

// import logo from './logo.svg';
import './App.css';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
};

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#ff0000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle;
    resetColor;
  };

  return (
    <form action="/" onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title..." value={titleProps} />
      <input {...colorProps} type="color" name="color" id="color" value={colorProps} />
      <button>ADD</button>
    </form>
  );
}

export default App;
