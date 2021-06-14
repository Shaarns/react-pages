import { Button, Container } from "@material-ui/core";
import React from "react";

export default class ImageSlider extends React.Component{
  constructor(props){
    super(props);
  this.state = {
    image:[
      "https://picsum.photos/500/300",
      "https://picsum.photos/id/237/500/300",
      "https://picsum.photos/500/300?grayscale",
      "https://picsum.photos/500/300/?blur",
    ],
    indx: 0
  };
}

  handlePrevious = () => {
    this.setState({
      indx: this.state.indx - 1
    });
  };
  handleNext = () => {
    this.setState({
      indx: this.state.indx + 1
    });
  };

  render(){
    let disabled;
    if(this.state.indx > this.state.image.length - 2){
      disabled = true;
    }
    else {
      disabled = false;
    }
    let disabled2;
    if(this.state.indx === 0 ) {
      disabled2 = true;
    }
    else {
      disabled2 = false;
    }
    return(
      <Container align="center">
        <img src={ this.state.image[this.state.indx]} alt="random "/>
        <Container>
          <Button
            variant="outlined"
            color="secondary"
            disabled={disabled2}
            onClick={this.handlePrevious}
          >
            Previous Image
          </Button>
          <Button
            variant="outlined"
            color="primary"
            disabled={disabled}
            onClick={this.handleNext}
          >
            Next Image
          </Button>
        </Container>
      </Container>
    );
  }
}