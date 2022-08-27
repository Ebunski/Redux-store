import React, { useEffect } from "react";
import Product from "./Product";
import Loading from "./Loading";
import PoorConnection from "./PoorConnection";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actionCreators/productActions";
import { AiOutlineWarning } from "react-icons/ai";

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
  if (loading.error) return <PoorConnection />;

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
