import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import {clearCart} from "../redux/actionCreators/cartActions";
import { connect } from "react-redux";

function Cart({ cartItems , handleClear,}) {
  const items = cartItems.map((x) => <CartItem key={x.id} {...x} />);
  if (cartItems.length < 1) return "Your cart is empty";
  return (
    <section className="section cart">
      
      <h3 className=""> Cart ({cartItems.length}) </h3>
      {items}
      <button className="button cart__clear" onClick = {handleClear}>Clear all</button>
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleClear() {
    dispatch(clearCart());
  },
});
const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems });

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
