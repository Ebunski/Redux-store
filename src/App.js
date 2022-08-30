import React, { useEffect } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import WrongPage from "./pages/WrongPage";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTotals, fetchRequest } from "./redux/actionCreators/cartActions";

export default function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequest);
  }, []);

  useEffect(() => {
    dispatch(getTotals());
    console.log("totals");
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("posted");
  }, [cart]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="product/:id" element={<Details />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
    </BrowserRouter>
  );
}
