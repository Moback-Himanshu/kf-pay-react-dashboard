import React from "react";
import styles from "./layout.module.scss";
import GlobalHeader from "../Header";
import GlobalFooter from "../Footer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

  const MainLayout = () => {
  const user = useSelector((state: any) => state.authentication);
  const isUserAuthenticated = user.isisUserAuthenticated;

  return (
    <div className={styles.layoutContainer}>
      <GlobalHeader />
       <Outlet />
      <GlobalFooter />
    </div>
  );
};

export default MainLayout;
