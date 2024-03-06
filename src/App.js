import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import FloorMain from "./Components/FloorMain";
import HowItWorks from "./Components/HowISec";
import Eco from "./Components/Eco";
import InfoReg from "./Components/InfoReg";

function App() {
  return (
    <div className="app">
      <FloorMain />
      <HowItWorks />
      <Eco />
      <InfoReg />
    </div>
  );
}
export default App;
