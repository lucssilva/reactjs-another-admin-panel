import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderWidget } from "./view/widgets";

function App() {
  return (
    <Router>
      <HeaderWidget title="Another Admin Panel App" />
    </Router>
  );
}

export default App;
