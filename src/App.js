import React, { Component } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [value, setvalue] = useState(0);
  const handleclick = (e) => {
    setvalue(value + 1);
  };
  return (
    <div>
      <span className="value">{value}</span>
      <button onClick={handleclick} id="inc">
        Incrementa
      </button>
    </div>
  );
}

export default App;
