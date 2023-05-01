import React from 'react'
import styles from './style.module.css'
import { products } from '../../products'
import ProductCard from '../ProductCard'

function Products() {
  return (
    <div className={styles.products_continuer}>
        {products.map((product)=><ProductCard product={product}/>)}
    </div>
  )
}

export default Products