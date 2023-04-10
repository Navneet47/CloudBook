import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from 'react-router-dom';
import NoteState from "./Context/notes/NoteState";

function App() {

  return (
    <div className="App">
      <NoteState>
      <Navbar />
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      </div>
      </NoteState>
    </div>
  );
}

export default App;
