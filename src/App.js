import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from 'react-router-dom';
import NoteState from "./Context/notes/NoteState";
import Login from "./components/Login";
import Register from "./components/Register";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

function App() {
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }

  return (
    <div className="App">
      <NoteState>
      <Navbar />
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home showAlert={showAlert} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login showAlert={showAlert} />} />
        <Route exact path="/register" element={<Register showAlert={showAlert} />} />
      </Routes>
      </div>
      </NoteState>
      <Footer/>
    </div>
  );
}

export default App;
