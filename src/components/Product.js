import React from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/actionCreators/cartActions";

/* 
============================
COMPONENT
============================
*/
function Product({ id, image, category, price, title, handleAdd }) {
  return (
    <ProductCard
      id={id}
      image={image}
      category={category}
      price={price}
      title={title}
      location="list"
    >
      <div className="product__list-footer">
        <Link to={`/product/${id}`}>
          <button className="product__list-footer--details styled-button">
            More details
          </button>
        </Link>
        <button
          className="product__list-footer--add styled-button"
          onClick={() => handleAdd({ id, image, price, title })}
        >
          Add to Cart
        </button>
      </div>
    </ProductCard>
  );
}
/* 
============================
CONNECT
============================
*/
function mapDispatchToProps(dispatch) {
  return {
    handleAdd: (obj) => dispatch(addProduct(obj)),
  };
}

export default connect(null, mapDispatchToProps)(Product);
