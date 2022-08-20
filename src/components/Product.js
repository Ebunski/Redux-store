import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Product({ id, category, description, image, price, rating, title }) {
  return (
    <div className="product">
      <img className="product__image" src={image} alt={title} />
      <article className="product__content">
        <h4 className="product__content--title">{`${title.substring(
          0,
          50
        )}${"..."}`}</h4>
        <p className="product__content--price">${price}</p>
        <p className="product__content--category">{category}</p>
      </article>
      <div className="product__footer">
        <Link to={`/product/${id}`}>
          <button className="product__footer--button">More details</button>
        </Link>
        <div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state, ownProps) {}

export default connect(mapStateToProps)(Product);
