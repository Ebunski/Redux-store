import React from "react";
import ProductsList from "../components/ProductsList";
import Filter from "../components/Filter";

export default function Home() {
  return (
    <main className=" home">
      <Filter />
      <ProductsList />
    </main>
  );
}
