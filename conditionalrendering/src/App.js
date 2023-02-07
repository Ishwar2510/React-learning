
import React, { useState } from "react";

import Fileone from "./Fileone";
import Filetwo from "./Filetwo";

function App() {
  const [flag, setFlag] = useState(true);
  const [count, setcount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        {" "}
        click me to change state
      </button>
      {flag ? <Fileone /> : <Filetwo />}
      {flag ? <h1>flag is set</h1> : <h1> flag not set</h1>}
    </>
  );
}

export default App;
