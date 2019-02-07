import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

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