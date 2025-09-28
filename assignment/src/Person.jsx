function Person({ person }) {
  return (
    <ul>
      <li>
        {person
          ? `${person.name.first} ${person.name.last} ${person.email}`
          : "Loading..."}
      </li>
    </ul>
  );
}
export default Person;
