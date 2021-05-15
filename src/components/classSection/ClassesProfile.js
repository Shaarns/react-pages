import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Avatar, Paper } from '@material-ui/core';
import pexels from "../images/pexels.jpg"
import teacher_profile_img from "../images/teacher_profile_img.jpg"
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles((theme) => ({
    mainWidth: {
        minWidth: '400px',
        maxWidth: "90%",
        margin:"auto",
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: "100% 400px",
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(12, 0, 12),
        marginBottom: theme.spacing(0),
    },
    heroButtons: {
        marginTop: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    profile:{
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        [theme.breakpoints.down('md')]:{
            flexDirection:"row",
        },
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(8, 5, 8, 8),
        margin: 'auto',
        borderRadius: '10px',
    },
    subpaper: {
        padding: theme.spacing(2),
    },
    image: {
        // width: 300,
        // height: 190,
    },
    avatarStyle:{
        marginRight:theme.spacing(2),
        width:theme.spacing(7),
        height:theme.spacing(7),
    },
    img: {
        margin: 'auto',
        display: 'block',
        height: '210px',
        width: '300px',
        borderRadius: "10px",
    },
    aboutContainer: {
        margin: theme.spacing(4),
    },
}));

const cards = [1, 2, 3, 4];

const ClassProfile = () => {
    const classes = useStyles();

    return (
        <main >
            <CssBaseline />
            <div className={classes.heroContent}>
                <Container >
                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={5}>
                            <Grid container spacing={10}  className={classes.profile}>
                                <Grid item  xs={8} sm={9} md={4} >
                                    <Grid className={classes.image}>
                                        <img className={classes.img} alt="complex" src={teacher_profile_img} />
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6} container>
                                    <Grid item xs container spacing={8} >
                                        <      Grid item xs>
                                            <Typography  variant="h5"
                                            gutterBottom>
                                                Complete Hydrocarbons In One Shot-JEE Main April Series
                                            </Typography>
                                            <Typography variant="body2"
                                                color="textSecondary"
                                                gutterBottom>
                                                Started on 2:00pm
                                            </Typography>
                                            <Grid item container className={classes.heroButtons}>
                                                <Grid item >
                                                    <Avatar className={classes.avatarStyle}
                                                        alt="Remy Sharp" src={pexels } />
                                                </Grid>
                                                <Grid item className={classes.heroButtons}>
                                                    <Typography >Kumar Saini
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Typography className={classes.heroButtons}
                                             variant="body1" color="textSecondary" gutterBottom>
                                                B.Tech- IIT Delhi, 13+ years teaching exp for IIT-JEE, senior physics faculty at Bansal class kota, Etoos, Allen and Vibrant academy Kota,
                                                #IITian |
                                            </Typography>
                                            <br />
                                            <hr />
                                           <Grid item container spacing={3}
                                           className={classes.heroButtons}>
                                                <Grid item >
                                                    <Button variant="contained"
                                                        className={classes.heroButtons}
                                                        size="large"
                                                        disableElevation
                                                        color="primary">Watch Now
                                                </Button>
                                                </Grid>
                                                <Grid item >
                                                    <Button variant="outlined"
                                                        className={classes.heroButtons}
                                                        size="large"
                                                        disableElevation
                                                    >
                                                        Share
                                                </Button>
                                                </Grid>
                                           </Grid>
                                        </Grid>
                                        <Grid container spacing={3} className={classes.heroButtons}>
                                            <Grid item>
                                                <Typography variant="subtitle2">
                                                    65M Watch mins</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle2">
                                                    5k Followers </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle2">
                                                    65M Watchtime</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6"
                        gutterBottom>
                            Similar Classes
            </Typography>
                    </Grid>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mathematics
                    </Typography>
                                    <Typography gutterBottom>
                                        Rank Booster Course on Integral Calculus
                    </Typography>
                                    <Typography variant="body2">
                                        Lesson 6 • Apr 10, 2021 3:30 PM
                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="textSecondary" >
                                        Kumar Saini
                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container className={classes.cardGrid}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Special classes
            </Typography>
                    </Grid>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Mathematics
                    </Typography>
                                    <Typography gutterBottom>
                                        Rank Booster Course on Integral Calculus
                    </Typography>
                                    <Typography variant="body2">
                                        Lesson 6 • Apr 10, 2021 3:30 PM
                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="textSecondary" >
                                        Kumar Saini
                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}
export default ClassProfile;