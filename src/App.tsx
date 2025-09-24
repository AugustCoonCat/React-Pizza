import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FullPizza from "./pages/FullPizza";
import NotFoundBlock from "./components/NotFoundBlock";

import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/pizza/:id" element={<FullPizza />}></Route>
        <Route path="*" element={<NotFoundBlock />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
