import React from "react";
import { connect } from "react-redux";
import {
  addProduct,
  decreaseProduct,
  removeProduct,
} from "../redux/actionCreators/cartActions";

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
    <div className="cart-item-container">
      <article className="cart-item">
        <img className="cart-item__image" src={image} alt={title} />
        <div className="cart-item__text">
          <h4 className="cart-item__text--title">
            {title.substring(0, 50)}...
          </h4>
          <p className="cart-item__text--price">${price}</p>
        </div>
      </article>

      <div className="cart-buttons">
        <button className="button" onClick={() => handleRemove(id)}>
          remove
        </button>
        <div className="quantity-buttons">
          <button className=" button" onClick={() => handleAdd(id)}>
            Add
          </button>
          <p> {quantity}</p>
          <button className="button" onClick={() => handleMinus(id)}>
            Minus
          </button>
        </div>
      </div>
    </div>
  );
}
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
