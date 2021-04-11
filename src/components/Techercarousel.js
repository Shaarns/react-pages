import {  ButtonBase } from "@material-ui/core";
import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import pexels from './images/pexels.jpg'
import "./styles.css";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1.5 },
    { width: 868, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
];
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    box: {
        minWidth:400,
    },
    paper: {
        padding: theme.spacing(2,0,2,0),
        margin: 'auto',
        maxWidth: 600,
    },
    image: {
        width: 148,
        height: 158,
        marginTop:theme.spacing(1),
    },
    img: {
        margin: 'auto',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    heading: {
        margin:'25px',
        textAlign:'center',
        fontWeight:'bold',
    }
}));


const TeacherCarousel = () => {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            <Container> 
            <Typography
                className={classes.heading}
                variant="h4" >
                Learn Togethor with Top Educators
            </Typography>
            </Container>
            <div className="App">
                <Carousel breakPoints={breakPoints} >
                    <Item>
                        <div className={classes.root}>
                        <Paper className={classes.paper} >
                            <Grid container spacing={0}>
                                <Grid item >
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} 
                                        alt="complex" src={pexels} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container 
                                        direction="column" spacing={2}>
                                        <Grid item sm>
                                            <Typography 
                                                gutterBottom 
                                                variant="h6"
                                                color='primary'>
                                                Teacher Name 
                                            </Typography>
                                            <Typography variant="body2" 
                                                gutterBottom>
                                                B.tech- IIT Delhi, 12+ year
                                                teaching experience for IIT -JEE
                                                - senior physics faculty at 
                                                bansal classes, #search me on 
                                                Google.
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary">
                                                ID: 1030114
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                color="primary"
                                                variant="body2"
                                                style={{ cursor: 'pointer' }}>
                                                Anything else
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                    </Item>
                    <Item><div className={classes.root}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} 
                                        alt="complex" src={pexels} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container 
                                    direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography 
                                                gutterBottom 
                                                variant="h6"
                                                color='primary'>
                                                    Teacher Name
                                            </Typography>
                                            <Typography 
                                                variant="body2" 
                                                gutterBottom>
                                                B.tech- IIT Delhi, 12+ year
                                                teaching experience for IIT -JEE
                                                - senior physics faculty at
                                                bansal classes, #search me on
                                                Google.
                                            </Typography>
                                            <Typography 
                                                variant="body2" 
                                                color="textSecondary">
                                                ID: 1030114
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography 
                                                variant="body2" 
                                                color='primary'
                                                style={{ cursor: 'pointer' }}>
                                                Anything else
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                    </Item>
                    <Item>
                        <div className={classes.root}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img className={classes.img} 
                                            alt="complex" src={pexels} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container 
                                            direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography 
                                                    gutterBottom 
                                                    variant="h6"
                                                    color='primary'>
                                                    Teacher Name
                                                </Typography>
                                                <Typography variant="body2" 
                                                    gutterBottom>
                                                    B.tech- IIT Delhi, 12+ year
                                                    teaching experience for 
                                                    IIT -JEE 
                                                    - senior physics faculty at
                                                    bansal classes, #search 
                                                    me on
                                                    Google.
                                                </Typography>
                                                <Typography variant="body2" 
                                                    color="textSecondary">
                                                    ID: 1030114
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography 
                                                    variant="body2" 
                                                    color='primary'
                                                    style={{ cursor: 'pointer' }}>
                                                    anything else
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    </Item>
                    <Item>
                        <div className={classes.root}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img 
                                            className={classes.img} 
                                            alt="complex" src={pexels} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container 
                                        direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom
                                                    variant="h6"
                                                    color='primary'>
                                                    Teacher Name
                                                </Typography>
                                                <Typography 
                                                    variant="body2" 
                                                    gutterBottom>
                                                    B.tech- IIT Delhi, 12+ year
                                                    teaching experience for IIT -JEE
                                                    - senior physics faculty at
                                                    bansal classes, #search me on
                                                    Google.
                                                </Typography>
                                                <Typography 
                                                    variant="body2" 
                                                    color="textSecondary">
                                                    ID: 1030114
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography 
                                                    variant="body2" 
                                                    style={{ cursor: 'pointer' }}>
                                                    Anything else
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    </Item>
                    <Item>
                        <div className={classes.root}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <ButtonBase className={classes.image}>
                                            <img
                                                className={classes.img}
                                                alt="complex" src={pexels} />
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item xs={12} sm container>
                                        <Grid item xs container
                                            direction="column" spacing={2}>
                                            <Grid item xs>
                                                <Typography gutterBottom
                                                    variant="h6"
                                                    color='primary'>
                                                    Teacher Name
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    gutterBottom>
                                                     B.tech- IIT Delhi, 12+ year
                                                    teaching experience for 
                                                    IIT -JEE
                                                    - senior physics faculty
                                                    at bansal classes, 
                                                    #search me on
                                                    Google.
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary">
                                                    ID: 1030114
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography
                                                    variant="body2"
                                                    style={{ cursor: 'pointer' }}>
                                                    anything
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    </Item>
                </Carousel>
            </div>
        </div>
    );
}
export default TeacherCarousel;