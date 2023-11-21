import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./session3/Login/Login";
import Register from "./session3/Login/Register";
import NotFoundPage from "./session3/404/NotFountPage";
import HomePage from "./session3";
import Contact from "./session3/Contact/Contact";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<NotFoundPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
