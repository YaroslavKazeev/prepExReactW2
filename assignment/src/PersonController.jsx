import { useState, useEffect } from "react";
import Person from "./Person";

function PersonController() {
  const [person, setPerson] = useState(null);

  async function getPerson() {
    const response = await fetch("https://randomuser.me/api?results=1");
    const data = await response.json();
    setPerson(data.results[0]);
  }

  useEffect(() => getPerson, []);
  console.log(person);
  return <Person person={person} />;
}
export default PersonController;
