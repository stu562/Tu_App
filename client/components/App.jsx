import React from 'react';
// import from './Product.jsx';
// import from './ProductList.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productOne: [],
      productTwo: [],
      productThree: [],
      currentIndex: 0,
      translateValue: 0
      };

    this.handleOnclickLeft = this.handleOnclickLeft.bind(this);
    this.handleOnclickRight = this.handleOnclickRight.bind(this);
  }
  handleOnclickRight(){
    //should handle rotation of carosuel
  }
  handleOnclickLeft(){
    //should handle rotation of carosuel
  }


  render() {
    return(
      <div>

      </div>
    )
  }
}

export default App;