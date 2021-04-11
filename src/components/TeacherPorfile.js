import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { ButtonBase, Paper } from '@material-ui/core';
import pexels from "./images/pexels.jpg";

const useStyles = makeStyles((theme) => ({
  mainWidth:{
    minWidth:'400px',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize:"100% 65%",
      backgroundRepeat:'no-repeat',
      padding: theme.spacing(12, 0, 12),
      marginBottom:theme.spacing(0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
    padding: theme.spacing(5,5,5,5),
    margin: 'auto',
    borderRadius:'10px',
  },
  subpaper: {
    padding:theme.spacing(2),
  },
  image: {
    width: 150,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    height:'100%',
    width:'100%',
    borderRadius: "10px"
  },
  aboutContainer: {
    margin:theme.spacing(4),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

export function TeacherProfile () {
  const classes = useStyles();

  return (
      <main className={classes.mainWidth}>
        <CssBaseline />
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <div className={classes.root}>
              <Paper className={classes.paper} elevation={5}>
                <Grid container spacing={4} >
                  <Grid item  justify="center">
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={pexels} />
                    </ButtonBase>
                  </Grid>
                  <Grid item  sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography gutterBottom variant="h4">
                          Kumar Saini
                        </Typography>
                        <Typography variant="body2"
                        color="primary"
                        gutterBottom>
                          #1 Educator in Physics · IIT JEE
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                          B.Tech- IIT Delhi, 13+ years teaching exp for IIT-JEE, senior physics faculty at Bansal class kota, Etoos, Allen and Vibrant academy Kota,
                          #IITian | Always Basics to JEE Advanced #11+ Yrs Exp. #Search Me on Google 😃 ...
                        </Typography>
                        {/* <hr/> */}
                        {/* <Grid item className={classes.typographyPadding}>
                          <Typography variant="body2" gutterBottom>
                            Educators Highlights
                          </Typography>
                          <Typography variant="body1" color="primary"
                            gutterBottom>
                            13+ years Experience
                          </Typography>
                          <Typography variant ="body1" color="primary"
                          gutterBottom>
                            Education: IIT Roorkee (B.Tech.)  •  2008 - 2012
                          </Typography>
                          <Typography variant="body1" color="primary"
                          gutterBottom>
                            Lives in Jaipur Rajasthan
                          </Typography>
                          <Typography variant="body1" color="primary"
                          gutterBottom>
                            Gyanacharya Educator since 29th April, 2021
                          </Typography>
                          <Typography variant="body1" color="primary"
                          gutterBottom>
                            1,209,729 live minutes taught in last 30 days
                          </Typography>
                          <Typography variant="body1" color="primary"
                          gutterBottom>
                            Knows Hindi and English
                          </Typography>
                        </Grid> */}
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        65M</Typography>
                    </Grid>
                  </Grid>
                    <Grid item>
                      <Typography variant="subtitle1"
                      color="primary">Other Details</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12}>
            <Typography variant="h5">
              IIT JEE
            </Typography>
            </Grid>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
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
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h5">
              Special classes
            </Typography>
          </Grid>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
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
      <Container maxWidth="md" className={classes.cardGrid}>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" color="primary"
              gutterBottom>
              About Me
              </Typography>
          </Grid>
          <Grid item md={10} xs={12} >
            <Typography variant="h5" align="center" gutterBottom>
              Hello! I’m Kumar Saini. Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations.
              </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='md'>
        <Grid container spacing={8} justify="center" className={classes.gridContainer}>
          <Grid item md={6} xs={12} >
            <Typography variant="h5" align="center"
              gutterBottom>
              Accomplishments
              </Typography>
            <Typography variant="body1"
            className={classes.aboutContainer}
            align="center"  color="textSecondary" gutterBottom>
              Latest Result: Mentor to Ashwin - 100%ile in Maths in JEE Main 2021 through my Evolve Batch. Many Students Scoring more than 99.5%ile in Maths.
              <br/>
              Top Educator in IIT-JEE on Unacademy. Mentored Thousands of IIT Aspirants all over India.
              <br/>
              India's Top Online Faculty (IIT-JEE) Educator of the Month - April People's Choice Award
              <br/>
              Most Popular Courses in IIT-JEE on Unacademy. Each Course Starts from Basics - Ends at JEE Advanced
              <br/>
              </Typography>
          </Grid>
          <Grid item md={6} xs={12} >
            <Typography variant="h5" align="center"
              gutterBottom>
              Knows About
              </Typography>
            <Typography variant="body1" align="center" 
              className={classes.aboutContainer}
              color="textSecondary" gutterBottom>
              Latest Result: Mentor to Ashwin - 100%ile in Maths in JEE Main 2021 through my Evolve Batch. Many Students Scoring more than 99.5%ile in Maths.
              <br />
              Top Educator in IIT-JEE on Unacademy. Mentored Thousands of IIT Aspirants all over India.
              <br />
              India's Top Online Faculty (IIT-JEE) Educator of the Month - April People's Choice Award
              <br />
              Most Popular Courses in IIT-JEE on Unacademy. Each Course Starts from Basics - Ends at JEE Advanced
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Container>
      </main>
  );
}