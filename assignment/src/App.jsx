import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState(null);

  async function getPerson() {
    const response = await fetch("https://randomuser.me/api?results=1");
    const data = await response.json();
    setPerson(data.results[0]);
  }

  useEffect(() => getPerson, []);
  console.log(person);

  return (
    <>
      <ul>
        <li>
          {person
            ? `${person.name.first} ${person.name.last} ${person.email}`
            : "Loading..."}
        </li>
      </ul>
    </>
  );
}

export default App;
