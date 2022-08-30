import React, { useState } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../redux/actionCreators/productActions";

function Filter({ categories, handleFilter }) {
  const [current, setCurrent] = useState(0);

  function handleStateChange(x, index) {
    console.log(x, index);
    handleFilter(x);
    setCurrent(index);
  }

  const category = categories.map((x, index) => (
    <button
      className={current === index ? "active-btn" : ""}
      onClick={() => handleStateChange(x, index)}
      key={index}
    >
      {x}
    </button>
  ));
  if (category.length < 2) return;
  return <nav className="category__container">{category}</nav>;
}

/* 
============================
CONNECT
============================
*/

function mapStateToProps(state) {
  let categories = state.products.productsList.map((x) => x.category);
  categories = ["all", ...new Set(categories)];
  return {
    categories: categories,
  };
}
const mapDispatchToProps = (dispatch) => ({
  handleFilter(category) {
    dispatch(filterProducts(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
