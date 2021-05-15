import React from 'react';
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';

export default class Practice extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            i : true,
        };
    }

    handleClick = () => {
        this.setState({
            i: !this.state.i
        });
    };
    render(){
        const buttonText = this.state.i ? "Hide List" : "Show list";
        const number = [1, 2, 3, 4, 5];
        const listItems = number.map((number) =>
            <li key={number}>{number}</li>
        );
        return(
            <Container maxWidth="sm" >
                <Grid container>
                    <Grid item xs={12}>
                        <Paper style= {{padding:50}} elevation={10}>
                            <div
                                style={this.state.i ? {} : { visibility: "hidden" }}
                            >
                                <ul>{listItems} </ul>
                                </div>
                            <Typography>
                                Practice
                            </Typography>
                            <br />
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => alert('clicked')}>
                                Click Me
                            </Button>
                        </Paper>
                        <h1> This is New button </h1>
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={this.handleClick}
                        >
                            {buttonText}
                        </Button>
                        <hr />
                        <br />
                        <Typography varaint="h2">
                            Take me to image slide page
                        </Typography>
                        <Button
                            variant= "outlined"
                            size="large"
                            href="/imageslider"
                        >
                            Take me
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}