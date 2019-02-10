//this component should be the single product 
// has all the info 
  //a clickable link that renders a new page 
  //the image
  //the name
  //the price

  import React from 'react';
  import styles from "./styles.css";

  const ProductTile = () => {
    return (
      
      <div className="productTile">
      
            <div title="product-image">
              <a href="http://www.google.com">
                <span>
                <img className={styles.product} src="https://s3-us-west-1.amazonaws.com/oiu-qln-products/similar+photo/goods_01_416612.jpeg"/>
                  <div title="product-name">
                    <span className={styles.productName}>Woman white Sweater Long Sleeve</span>
                  </div>
                </span>
              </a>
              <div title="product-price">
                <span className={styles.productPrice}>$79.99</span>
              </div>
            </div>
        </div>
    );
  }

  export default ProductTile;