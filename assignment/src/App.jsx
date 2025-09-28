import { useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState(null);

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
