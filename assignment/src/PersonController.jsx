import { useState, useEffect } from "react";
import Person from "./Person";

function PersonController() {
  const [person, setPerson] = useState(null);

  async function getPerson() {
    const response = await fetch("https://randomuser.me/api?results=1");
    const data = (await response.json()).results[0];
    setPerson({
      firstName: data.name.first,
      lastName: data.name.last,
      email: data.email,
    });
  }

  useEffect(() => getPerson, []);
  console.log(person);
  return <Person person={person} />;
}
export default PersonController;
