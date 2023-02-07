import React, { useEffect, useState } from "react";

import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Info from "./Info";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
    async function fetchData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let responseData = await response.json();
      console.log("fetched call");
      setData(responseData);
    }
  }, []);
  return (
    <>
      <Link to="/home">Home</Link>||
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/home">
             <Route index element ={<Home data={data} />}></Route>
            <Route path =':id' element ={<Info data={data}/>}></Route>
        </Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}
export default App;
