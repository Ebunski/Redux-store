import React from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import {
  addProduct,
  decreaseProduct,
  removeProduct,
} from "../redux/actionCreators/cartActions";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
//md
/* 
============================
COMPONENT
============================
*/
function CartItem({
  id,
  image,
  quantity,
  price,
  title,
  handleAdd,
  handleMinus,
  handleRemove,
}) {
  return (
    <ProductCard
      id={id}
      image={image}
      price={price}
      title={title}
      location="cart"
    >
      <div className="product__cart-footer">
        {" "}
        <button
          aria-label="remove-product"
          className="styled-button"
          onClick={() => handleRemove(id)}
        >
          <AiOutlineDelete />
        </button>
        <div className="product__cart-footer--quantity">
          <button
            aria-label="increase quantity"
            className=" styled-button"
            onClick={() => handleAdd(id)}
          >
            <AiOutlinePlus />
          </button>
          <p> {quantity}</p>
          <button
            aria-label="decrease quantity"
            className="styled-button"
            onClick={() => handleMinus(id)}
          >
            <AiOutlineMinus />
          </button>
        </div>
      </div>
    </ProductCard>
  );
}

/* 
============================
CONNECT
============================
*/
const mapDispatchToProps = (dispatch) => ({
  handleAdd(id) {
    dispatch(addProduct({ id }));
  },
  handleMinus(id) {
    dispatch(decreaseProduct(id));
  },
  handleRemove(id) {
    dispatch(removeProduct(id));
  },
});
export default connect(null, mapDispatchToProps)(CartItem);
