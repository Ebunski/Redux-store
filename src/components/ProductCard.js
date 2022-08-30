import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";

export default function ProductCard({
  image,
  category,
  price,
  title = "",
  children,
  location,
}) {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";

  /* 
============================
JSX
============================
*/
  return (
    <div className="product">
      <div className="product__image--container">
        {isDark && <div className="backdrop"></div>}
        <img className="product__image" src={image} alt={title} />
      </div>

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
