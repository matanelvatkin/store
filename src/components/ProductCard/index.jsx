import React from 'react'
import styles from './style.module.css'
function ProductCard({product,...props}) {
  return (
    <div className={styles.product_card} {...props}>
      <img className={styles.product_img} src={product.src} alt={product.name} />
      <span >{product.name}</span>
      <span>₪{product.price}</span>
      <span>{product.category}</span>
      <button>cart</button>
    </div>
  )
}

export default ProductCard