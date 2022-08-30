import React from "react";

import { connect } from "react-redux";

function Summary({ totalPrice }) {
  return (
    <article className="cart__summary">
      <h3 className="cart__summary--title">cart summary</h3>
      <div className="cart__summary--content">
        <p>Subtotal:</p>
        <span className="cart__summary--price">${totalPrice}</span>
      </div>
      <button className="styled-button">Checkout </button>
    </article>
  );
}
const mapStateToProps = (state) => ({ totalPrice: state.cart.totalPrice });
export default connect(mapStateToProps)(Summary);
