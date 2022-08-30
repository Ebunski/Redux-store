import React from "react";
import CartItem from "../components/CartItem";
import Error from "../components/Error";
import Summary from "../components/Summary";
import { clearCart } from "../redux/actionCreators/cartActions";
import { connect } from "react-redux";

function Cart({ cartItems, handleClear }) {
  const items = cartItems.map((x) => <CartItem key={x.id} {...x} />);
  if (cartItems.length < 1) return <Error type="empty" />;
  return (
    <section className=" cart">
      <h3 className=""> Cart ({cartItems.length}) </h3>
      <div className="cart__content">{items}</div>
      <button className="styled-button" onClick={handleClear}>
        Clear all
      </button>
      <Summary />
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
