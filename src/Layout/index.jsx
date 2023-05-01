import React from "react";
import styles from "./style.module.css";
import Products from "../components/Products";
import Categories from "../components/Categories";

function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>myStore</header>
      <main className={styles.main}>
        <Categories/>
        <Products />
      </main>
    </div>
  );
}

export default Layout;
