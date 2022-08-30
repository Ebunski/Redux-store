import React, { useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoading,
  setDetails,
  setError,
  removeDetails,
} from "../redux/actionCreators/productActions";
import { addProduct } from "../redux/actionCreators/cartActions";

/* 
============================
COMPONENT
============================
*/
function ProductDetails() {
  const details = useSelector((state) => state.details);
  const loading = useSelector((state) => state.loading);
  const { image, title, price, category, description } = details;
  const dispatch = useDispatch();

  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  async function fetchProductDetails() {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(url);
      dispatch(setDetails(response.data));
      console.log(response.data);
    } catch (error) {
      console.log(error);
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    id && fetchProductDetails();
    return () => {
      dispatch(removeDetails);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  /* 
============================
JSX
============================
*/

  if (loading.state) return <Loading />;
  if (loading.error) return <Error type="network" />;
  return (
    <div className="details">
      <img className="details__image" src={image} alt={title} />
      <div className="details__content">
        <h3 className="details__content--title">{title}</h3>

        <p className="details__content--description">{description}</p>

        <h4 className="details__content--category">{category}</h4>

        <p className="details__content--price">${price}</p>

        <button
          className="details__content--button styled-button"
          onClick={() => dispatch(addProduct({ ...details }))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
