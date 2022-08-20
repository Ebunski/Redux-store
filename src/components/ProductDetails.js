import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchStart,
  setDetails,
  fetchError,
  removeDetails,
} from "../redux/actionCreators/productActions";

function ProductDetails() {
  const details = useSelector((state) => state.details);
  const { image, title, price, category, description } = details;
  const dispatch = useDispatch();

  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  async function fetchProductDetails() {
    try {
      dispatch(fetchStart);
      const response = await axios.get(url);
      dispatch(setDetails(response.data));
      console.log(response.data);
    } catch (error) {
      console.log(error);
      dispatch(fetchError(error.message));
    }
  }
  useEffect(() => {
    id && id !== "" && fetchProductDetails();
    return () => {
      dispatch(removeDetails);
    };
  }, [id]);
  console.log(title);

  return (
    <div>
      {Object.keys(details).length === 0 ? (
        <h1> Loading....</h1>
      ) : (
        <div className="details">
          <img className="details__image" src={image} alt={title} />
          <div className="details__content">
            <h3 className="details__content--title">{title}</h3>
            <div className="details__content--price">${price}</div>
            <h4 className="details__content--category">{category}</h4>
            <p className="details__content--description">{description}</p>

            <button className="details__content--button">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
