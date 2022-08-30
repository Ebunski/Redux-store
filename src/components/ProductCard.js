import React from "react";

/* 
============================
COMPONENT
============================
*/
export default function ProductCard({
  image,
  category,
  price,
  title = "",
  children,
  location,
}) {
  console.log(category);
  return (
    <div className="product">
      <img className="product__image" src={image} alt={title} />
      <article className="product__content">
        <h4 className="product__content--title">{title.substring(0, 50)}...</h4>
        <p className="product__content--price">${price}</p>
        {location !== "cart" && (
          <p className="product__content--category">{category}</p>
        )}
      </article>
      {children}
    </div>
  );
}
