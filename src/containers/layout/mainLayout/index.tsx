import React from "react";
import styles from "./layout.module.scss";
import GlobalHeader from "../Header";
import GlobalFooter from "../Footer";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.layoutContainer}>
      <GlobalHeader />
      <div className={styles.content}>{children}</div>
      <GlobalFooter />
    </div>
  );
};

export default MainLayout;
