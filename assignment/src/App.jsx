import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState(null);

  // Use useEffect to call getPerson when component mounts
  useEffect(() => {
    async function getPerson() {
      const response = await fetch("https://randomuser.me/api?results=1");
      const data = await response.json();
      setPerson(data.results[0]);
    }

    getPerson();
  }, []); // Empty dependency array means this runs once on mount
  console.log(person);

  return (
    <>
      <p>
        {person ? `${person.name.first} ${person.name.last}` : "Loading..."}
      </p>
    </>
  );
}

export default App;
