import React from "react";
import { products } from "../../products";
import styles from "./style.module.css";
function Categories() {
  const categories = [];
  products.forEach((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });
  return (
    <div className={styles.categories}>
      {categories &&
        categories.map((category) => (
          <span className={styles.category}>{category}</span>
        ))}
    </div>
  );
}

export default Categories;
