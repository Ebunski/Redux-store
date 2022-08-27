import React from "react";

import { connect } from "react-redux";

function Summary({ totalPrice }) {
  return (
    <article className="cart-summary">
      <h3 className="cart-summary__title">cart summary</h3>
      <div className="cart-summary__content">
        <p>Subtotal</p>
        <h4>{totalPrice}</h4>
      </div>
      <button className="cart-summary__button styled-button">Checkout </button>
    </article>
  );
}
const mapStateToProps = (state) => ({ totalPrice: state.cart.totalPrice });
export default connect(mapStateToProps)(Summary);
