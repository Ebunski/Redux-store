import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../redux/actionCreators/cartActions";

/* 
============================
COMPONENT
============================
*/
function Product({
  id,
  category,
  description,
  image,
  price,
  rating,
  title,
  add,
}) {
  return (
    <div className="product">
      <img className="product__image" src={image} alt={title} />
      <article className="product__content">
        <h4 className="product__content--title">{title.substring(0, 50)}...</h4>
        <p className="product__content--price">${price}</p>
        <p className="product__content--category">{category}</p>
      </article>
      <div className="product__footer">
        <Link to={`/product/${id}`}>
          <button className="product__footer--details styled-button">
            More details
          </button>
        </Link>
        <button
          className="product__footer--add styled-button"
          onClick={() => add({ id, image, price, title })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
/* 
============================
CONNECT
============================
*/
function mapDispatchToProps(dispatch) {
  return {
    add: (obj) => dispatch(addProduct(obj)),
  };
}

export default connect(null, mapDispatchToProps)(Product);
