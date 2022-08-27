import React from "react";
import { connect } from "react-redux";
import { filterProducts } from "../redux/actionCreators/productActions";

function Filter() {
  return (
    <div>
      <div></div>
    </div>
  );
}

/* 
============================
CONNECT
============================
*/

function mapStateToProps(state) {
  return {
    productsList: state.products.productsList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    add: (obj) => dispatch(filterProducts(obj)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
