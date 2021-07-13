import React, { useState } from "react";
import OriginCounterContainer from "./containers/OriginCounterContainer";

function App() {
  const [number, setNumber] = useState(0);
  const [diff, setDiff] = useState(1);
  return (
    <OriginCounterContainer
      number={number}
      diff={diff}
      setNumber={setNumber}
      setDiff={setDiff}
    />
  );
}

export default App;

