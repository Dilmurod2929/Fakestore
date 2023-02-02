import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Showcase from "./Components/Showcase";
import Details from "./Components/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
