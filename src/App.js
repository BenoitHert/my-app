import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './component/MainComponent';
import {BrowserRouter, Router} from "react-router-dom";




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Main/>
    </BrowserRouter>


    </div>
  );
}

export default App;
