import { useState, useEffect } from "react";

// import logo from './logo.svg';
import './App.css';

function GithubUser({ name, location, avatar }) {
  return (
    <>
      <h1>{name}</h1>
      <h3>{location}</h3>
      <img src={avatar} alt={name} height={150} />
    </>
  );
};

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/moonhighway`)
      .then(res => res.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <GithubUser name={data.name} location={data.location} avatar={data.avatar_url} />
    )
  }

  return <h1>Data</h1>;
}

export default App;
