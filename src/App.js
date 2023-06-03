import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Create from "./components/Create";
import Read from "./components/Read";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Update";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route exact path="/edit/:id" element={<Update />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
