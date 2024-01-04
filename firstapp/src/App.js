import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import About from './components/About.js';
import { Switch, Route, Routes } from "react-router-dom";

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");

      // setInterval(()=>{
      //   document.title = "Trade Point - Dark Mode";
      // }, 500);

      document.title = "Trade point - Dark Mode";

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

      document.title = "Trade point - Light Mode";
    }
  }
  return (
    <>
      <Router>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={TextForm} />
            <Route path='/me' element={Me}/>
          </Routes>

        </div>

      </Router>
    </>
  );
}