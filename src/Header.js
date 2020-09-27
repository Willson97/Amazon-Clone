import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__search-input" type="Text" />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header-option-line-one">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header-option-line-two">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header-option-line-one">Returns</span>
          <span className="header-option-line-two">Orders</span>
        </div>
        <div className="header__option">
          <span className="header-option-line-one">Your</span>
          <span className="header-option-line-two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__option-basket">
            <ShoppingBasketIcon />
            <span className="header-option-line-two  header-basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
