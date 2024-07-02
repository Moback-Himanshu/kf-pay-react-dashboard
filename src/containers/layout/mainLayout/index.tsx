import React from "react";
import styles from "./layout.module.scss";
import GlobalHeader from "../Header";
import GlobalFooter from "../Footer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const MainLayout = () => {
  const user = useSelector((state: any) => state.authentication);
  const isUserAuthenticated = user.isisUserAuthenticated
//  console.log('isUserAuthenticated--', isUserAuthenticated);
  return (
    <div className={styles.layoutContainer}>
    {/* {isUserAuthenticated ?  <GlobalHeader /> : ''} */}
      <GlobalHeader  />
      <Outlet />
        {/* <div className={styles.content}>{children}</div> */}
      <GlobalFooter />
    </div>
  );
};

export default MainLayout;
