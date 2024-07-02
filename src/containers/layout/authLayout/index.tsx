import React from "react";
import styles from "./layout.module.scss";
import GlobalHeader from "../Header";
import GlobalFooter from "../Footer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

// interface Props {
//   children: JSX.Element[] | JSX.Element;
// }

// const AuthLayout = ({ children }: Props) => {
  const AuthLayout = () => {

  return (
    <div className={styles.layoutContainer}>
      {/* <div className={styles.content}>{children}</div> */}
      
      <Outlet /><GlobalFooter />
    </div>
  );
};

export default AuthLayout;

