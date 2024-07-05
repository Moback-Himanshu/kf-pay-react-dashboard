import React from "react";
import styles from "./layout.module.scss";
import GlobalFooter from "../Footer";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {

  return (
    <div className={styles.layoutContainer}>
      <Outlet />
      <GlobalFooter />
    </div>
  );
};
export default AuthLayout;