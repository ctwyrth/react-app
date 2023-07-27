import { useReducer } from "react";

// import logo from './logo.svg';
import './App.css';

function App() {
  const [checked, setChecked] = useReducer(checked => !checked, false);

  return (
    <div className="App">
      <input type="checkbox" name="checked" id="checked" value={checked} onChange={setChecked} />
      <label htmlFor="checked">{checked ? "Checked" : "Not Checked"}</label>
    </div>
  );
}

export default App;
