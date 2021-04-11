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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundSize:"cover",
      backgroundRepeat:'no-repeat',
      padding: theme.spacing(15, 0, 15),
      marginBottom:theme.spacing(10),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5,5,5,5),
    margin: 'auto',
    borderRadius:'10px',
  },
  image: {
    width: 120,
    height: 150,
    // margin:theme.spacing(2),
  },
  img: {
    margin: 'auto',
    display: 'block',
    height:'100%',
    width:'100%',
    borderRadius: "10px"
  },
  typographyPadding: {
    paddingTop:theme.spacing(2),
    lineHeight:'20px',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function TeacherProfile () {
  const classes = useStyles();

  return (
      <main>
      <CssBaseline />
        <div className={classes.heroContent}>
          <Container maxWidth="md">
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={4}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={pexels} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
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
                      </Typography>
                      <hr/>
                        <Grid item className={classes.typographyPadding}>
                        <Typography variant="body2" gutterBottom>
                          Educators Highlights
                      </Typography>
                        <Typography variant="body1" color="primary" gutterBottom>
                          13+ years Experience
                      </Typography>
                        <Typography variant="body1" color="primary" gutterBottom>
                          Lives in Jaipur Rajasthan
                      </Typography>
                        <Typography variant="body1" color="primary" gutterBottom>
                          Gyanacharya Educator since 29th April, 2021
                      </Typography>
                        <Typography variant="body1" color="primary" gutterBottom>
                          1,209,729 live minutes taught in last 30 days
                      </Typography>
                        <Typography variant="body1" color="primary" gutterBottom>
                          Knows Hindi and English
                      </Typography>
                        </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
                </Grid>
                <Grid container spacing={2}>
                <Grid item>
                  <Paper>
                    <Typography variant="h6">
                      helllo</Typography>
                  </Paper>
                </Grid>
                </Grid>
            </Paper>
          </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item >
              <Typography variant="h5" align="justify" gutterBottom>
              Hello! I’m Robert Smith. Senior Web Developer specializing in front end development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript, SQL, and C. Stng background in project management and customer relations.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
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
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
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