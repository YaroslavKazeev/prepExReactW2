function Person({ person }) {
  if (person == null) {
    return null;
  }
  return (
    <ul>
      <li>First name: {person.firstName}</li>
      <li>Last name: {person.lastName}</li>
      <li>Email: {person.email}</li>
    </ul>
  );
}
export default Person;
