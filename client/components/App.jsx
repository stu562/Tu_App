import React from 'react';
import styles from "./styles.css";
// import Slider from "./Slider.jsx";
// import from './Product.jsx';
// import from './ProductList.jsx';

import Slide from './slide';
import LeftArrow from './ArrowLeft';
import RightArrow from './ArrowRight';
import Product from './ProductTile.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // properties:data.properties,
      // property:data.properties[0],
      products:[],
      currentIndex: 0,
      translateValue: 0
      };

    this.handleOnclickLeft = this.handleOnclickLeft.bind(this);
    this.handleOnclickRight = this.handleOnclickRight.bind(this);
  }
  handleOnclickRight(){
    //should handle rotation of carosuel
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  }
  handleOnclickLeft(){
    //should handle rotation of carosuel
    const newIndex = this.state.property.index - 1;
    this.setState({     
      property: data.properties[newIndex]
    });
  }


  render() {
    return(
      <div>
        <div className={styles.similar}>Similar Items</div>
        <Product />
        
        <div className={styles.similar}>YOU MAY ALSO LIKE </div>
        <span><img className={styles.product} src="https://s3-us-west-1.amazonaws.com/oiu-qln-products/similar+photo/goods_01_416612.jpeg"/></span>
        <span><img className={styles.product} src="https://s3-us-west-1.amazonaws.com/oiu-qln-products/similar+photo/goods_01_416612.jpeg"/></span>
        <span><img className={styles.product} src="https://s3-us-west-1.amazonaws.com/oiu-qln-products/similar+photo/goods_01_416612.jpeg"/></span>
        <span><img className={styles.product} src="https://s3-us-west-1.amazonaws.com/oiu-qln-products/similar+photo/goods_01_416612.jpeg"/></span>

        

        {/* <button type="button" > Previous </button>
        <button type="button" > Next </button> */}
          {/* <div><img url="https://s3-us-west-1.amazonaws.com/oiu-qln-products/similar+photo/goods_01_416612.jpeg"/></div> */}
            
          

          {/* <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}></div>  // explore tranform */}

            {/* {
            this.state.product.map((image, i) => (
              <Slide key={i} image={image} />))
            }  //map through product*/}
          <div className="slider">
                <Slide />
                <LeftArrow prev={this.handleOnclickLeft}/>
                <RightArrow next={this.handleOnclickRight}/>
      
          </div>
          

      
      </div>
    )
  }
}

export default App;