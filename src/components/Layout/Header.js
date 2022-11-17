import React from "react";

import HeaderCardButton from "./HeaderCardButton";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton></HeaderCardButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicius food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
