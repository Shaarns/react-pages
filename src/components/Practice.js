import React from 'react';
import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';

export default class Practise extends React.Component{
    render(){
        return(
            <Container maxWidth="sm">
                <Grid container >
                    <Grid item xs={12}>
                        <Paper >
                            <Typography>
                                Practice
                    </Typography>
                            <br />
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => alert("this is an alert")}>
                                Click Me
                    </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}


