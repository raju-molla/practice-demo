import React, { useState } from "react";
import WatchTrafic from "./component/WatchTraficc.js/WatchTrafic";
import ApiForm from "./screen/ApiForm";

import "./App.css"; // Import a CSS file for additional styling

function App() {
  const [showComponentA, setShowComponentA] = useState(false);
  const [showComponentB, setShowComponentB] = useState(false);

  const showA = () => {
    setShowComponentA(true);
    setShowComponentB(false);
  };

  const showB = () => {
    setShowComponentA(false);
    setShowComponentB(true);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Show Different Components</h1>
      </div>
      <div className="button-container">
        <button className="action-button" onClick={showA}>
          Instance & Token
        </button>
        <button className="action-button" onClick={showB}>
          Live traffic
        </button>
      </div>

      <div className="component-container">
        {showComponentA && <ApiForm />}
        {showComponentB && <WatchTrafic />}
      </div>
    </div>
  );
}

export default App;
