import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Fetch from "./components/Fetch";
import Searchquery from "./components/Searchquery";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Fetch />
      <Searchquery />
    </div>
  );
}
export default App;
