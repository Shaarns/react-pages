import React from "react";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";

export class Exercise extends React.Component {
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
        };
        setTimeout(() => {
        this.setState({
            status: 1,
        });
    },3000);
    }
    onMakeOlder(){
        this.setState({
            age: this.state.age + 3,
            // status: this.state.status + 1,
        })
        console.log(this.age);
    }
    render() {
        return (
            <Container>
                <p>In a new Component</p>
                <p>Your name is {this.props.name} </p>
                <h2>And age is {this.state.age}</h2>
                <h3>Status: {this.state.status} </h3>
                <h4>Hobbies</h4>
                <ul>
                    {this.props.user.hobbies.map((hobby, i) => 
                    <li key={i}>{hobby}</li> )}
                </ul>
                <hr/>
                {this.props.children}
                <hr/>
                <Button color="primary" variant="contained"
                    onClick={() => this.onMakeOlder()}>
                    Make me older</Button>
                <hr/>
                <Button color="primary" variant="contained"
                    onClick={this.props.greet} className="btn vtn-primary"> 
                    alert
                </Button>
            </Container>
        );
    }
}
