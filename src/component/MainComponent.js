import React from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import {Route, Routes, Navigate} from "react-router-dom";
import TodoList from "../Todo/TodoList";

function Main() {
    return (
        <React.Fragment>
        <Header/>
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Navigate replace to="/home"/>}/>
        <Route path="/todo" element={<TodoList/>}/>
        </Routes>
    
        <Footer/>

        </React.Fragment>
    )

        
        
}

export default Main;