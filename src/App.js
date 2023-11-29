import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./session3/Login/Login";
import Register from "./session3/Login/Register";
import NotFoundPage from "./session3/404/NotFountPage";
import HomePage from "./session3";
import Contact from "./session3/Contact/Contact";
import Table from "./session5/Table";
import KeoBuaBao from "./session5/KeoBuaBao";
import TodolistRTK from "./session7/TodolistRTK";
import Taixiu from "./session8/Taixiu";
import BauCua from "./session9/BauCua";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/table" element={<Table/>}/>
      <Route path="/keo-bua-bao" element={<KeoBuaBao/>}/>
      <Route path="/todolist" element={<TodolistRTK/>}/>
      <Route path="/taixiu" element={<Taixiu/>}/>
      <Route path="/baucua" element={<BauCua/>}/>
    </Routes>
  );
}

export default App;
