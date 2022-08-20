import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="product/:id" element={<Details />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
