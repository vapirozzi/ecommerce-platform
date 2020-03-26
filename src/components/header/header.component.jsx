import React from "react";

import "./header.styles.scss";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/icon.svg";
import { auth } from "../../firebase/firebase.utils";

import { useLocation } from "react-router-dom";

const Header = ({ currentUser }) => {
  let location = useLocation();
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <Link
            className="option"
            to={location.pathname}
            onClick={() => auth.signOut()}
          >
            SIGN OUT{" "}
          </Link>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateTopProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateTopProps)(Header);
