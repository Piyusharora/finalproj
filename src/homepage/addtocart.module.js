import React from 'react';
import ReactDOM from 'react-dom';
import {Nav} from 'react-bootstrap';
class MyButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 0};
      this.buttonClicked = this.buttonClicked.bind(this);
    }
    
    buttonClicked(event) {
      this.setState({value: this.state.value+1});
    }
    
    render() {
      return (
        
          <div>
          <Nav.Link>{this.state.value}</Nav.Link>
          <button onClick={this.buttonClicked}>Add to cart</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <MyButton />,
    document.getElementById('root')
  );
  export default MyButton;