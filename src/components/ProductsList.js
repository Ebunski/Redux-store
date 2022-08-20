import React, { useEffect } from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actionCreators/productActions";

function ProductsList({ productsList = [], loading, getProducts }) {
  useEffect(() => {
    getProducts();
  }, []);
  console.log(loading.state);
  if (loading.state) return <h1>Loading...</h1>;
  if (loading.error) return <h2>{loading.error}</h2>;

  const renderList = productsList.map((x) => <Product key={x.id} {...x} />);

  return <section className="products-list">{renderList}</section>;
}

/*
====

REDUX FUNCTIONS

=====
*/

function mapStateToProps(state) {
  return {
    productsList: state.products.productsList,
    loading: state.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getProducts() {
      dispatch(fetchProducts);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
