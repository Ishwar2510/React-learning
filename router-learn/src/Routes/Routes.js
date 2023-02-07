import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Students from "../pages/Students";
import Navbar from "../components/Navbar";
import StudentInfo from "../pages/StudentInfo";

function CRoutes() {
  console.log("CRoutes called 1");
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" >
          <Route index element={<Students />} />
          <Route path=":id" element={<StudentInfo />} />
        </Route>
        <Route path="*" element={<h1>403 error Page</h1>} />
      </Route>
    </Routes>
  );
}

export default CRoutes;
