import Home from "./Pages/Home.js";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout.js";
import Article from "./Pages/Article.js";

export default function App() {

  console.log("hello");

  return (
    <div className='bg-brown2 min-h-screen flex flex-col items-center'>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/article" element={<Article />} />
      </Routes>
    </div>
  );
};
