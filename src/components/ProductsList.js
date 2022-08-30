import React, { useEffect } from "react";
import Product from "./Product";
import Loading from "./Loading";
import Error from "./Error";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actionCreators/productActions";

/* 
============================
COMPONENT
============================
*/
function ProductsList({ productsList = [], loading, getProducts }) {
  useEffect(() => {
    getProducts();
  }, []);

  if (loading.state) return <Loading />;
  if (loading.error) return <Error type="network" />;

  const renderList = productsList.map((x) => <Product key={x.id} {...x} />);

  return <section className="products-list">{renderList}</section>;
}

/* 
============================
CONNECT
============================
*/

function mapStateToProps(state) {
  return {
    productsList: state.products.filteredList,
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
