import React from "react";

import Fruits from "./Fruits";
import Store from "./store";
import "./styles.css";

export default function App() {
  return (
    <Store>
      <div className="App">
        <Fruits />
      </div>
    </Store>
  );
}
