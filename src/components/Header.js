import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { connect } from "react-redux";

function Header({ total }) {
  return (
    <header>
      <nav className="nav">
        <NavLink to="/">
          <div className="nav__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 333333 316450"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                d="M230965 221006c12301-1273 21633-11878 21209-24604-423-12725-11029-22906-23754-22906h-848c-13151 424-23331 11453-22906 24603 424 6363 2969 11878 6786 15695-14422 28422-36479 49207-69565 66599-22482 11878-45811 16120-69141 13151-19089-2546-33935-11029-43269-25029-13573-20785-14845-43268-3392-65750 8060-16120 20784-27997 28844-33936-1696-5515-4242-14846-5514-21633-61507 44541-55143 104776-36480 133197 13998 21211 42418 34361 73807 34361 8483 0 16966-849 25450-2969 54296-10606 95442-42845 118771-90779zm74656-52600c-32238-37754-79746-58539-134042-58539h-6786c-3818-7635-11878-12727-20785-12727h-849c-13148 424-23328 11453-22905 24604 424 12725 11028 22906 23754 22906h848c9332-425 17392-6363 20785-14423h7635c32238 0 62779 9332 90352 27573 21208 13999 36479 32239 44962 54297 7211 17817 6787 35208-849 50056-11876 22482-31813 34784-58112 34784-16967 0-33086-5091-41570-8909-4665 4242-13150 11028-19088 15272 18241 8483 36905 13150 54720 13150 40722 0 70839-22483 82292-44965 12301-24604 11452-67023-20361-103079zM90137 228216c424 12726 11029 22906 23754 22906h849c13150-423 23330-11453 22905-24603-423-12726-11029-22906-23754-22906h-848c-849 0-2122 0-2969 423-17392-28845-24603-60234-22057-94170 1695-25452 10180-47510 25026-65751 12301-15695 36055-23331 52174-23754 44962-849 64050 55144 65323 77628 5515 1272 14846 4242 21210 6363C246659 35633 204241 0 163521 0c-38177 0-73384 27573-87383 68296-19512 54297-6786 106472 16968 147620-2120 2969-3393 7635-2969 12302v-1z"
                fill="#764abc"
              />
            </svg>
            <h2 className="nav__logo--title">Redux store</h2>
          </div>
        </NavLink>

        <NavLink to={"/cart"}>
          <div className="nav__cart">
            <button aria-label="cart" className="nav__cart--button">
              <AiOutlineShoppingCart />
            </button>

            <span className="nav__cart--items">{total}</span>
          </div>
        </NavLink>
      </nav>
    </header>
  );
}
const mapStateToProps = (state) => ({ total: state.cart.totalAmount });

export default connect(mapStateToProps)(Header);
