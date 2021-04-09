import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    division: {
        minWidth:"350px",
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    container: {
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
    },
    heroContent: {
        alignText:'left',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(18, 0, 20, 0),         
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    aboutimg: {
        height:'100%',
        width:'100%',
    },
    aboutsubimg: {
        height: '300px',
        width:"350px",
    },
    subGrid:{
        padding:theme.spacing(2),
        margin:theme.spacing(12),
       [theme.breakpoints.down('xs')]:{
        margin:theme.spacing(1),
       },
    },
    aboutButton: {
        margin:theme.spacing(2),
        borderRadius:20,
        padding:theme.spacing(1,3,1,3)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position:'relative',
    },
    cardlogo: {
        display:'flex',
        justifyContent: 'center',
    },
    cardMedia: {
        borderRadius:'50%',
        height:'150px',
        width:'150px',    
        margin:theme.spacing(2,0,2,0)    
    },
    cardContent: {
        flexGrow: 1,
        textAlign: 'center',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function About() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <main className={classes.division}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="md" >
                        <Grid container spacing={10}>
                            <Grid item md={6} sm={12} xs={12} 
                            className={classes.container}>
                                <Typography component="h1" variant="h2" 
                                    align="center" 
                                    color="textPrimary" gutterBottom>
                                    About
                                </Typography>
                                <Typography variant="h5" 
                                    align="center" 
                                    color="textSecondary" paragraph>
                                    Something short and leading about the 
                                    collection below—its contents, 
                                    the creator, etc.
                                    Make it short and sweet, but not too short.
                                </Typography>
                                <div className={classes.heroButtons}>
                                    <Grid container spacing={2} 
                                        justify="center">
                                        <Grid item>
                                            <Button variant="contained" 
                                                color="primary">
                                                Main call to action
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="outlined" 
                                                color="primary">
                                                Secondary action
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <CardMedia
                                    className={classes.aboutimg}
                                    image="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" 
                                    title="Image title"
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <Container  >
                    <Grid container  spacing={5}>
                        <Grid item md={5} sm={6} className={classes.subGrid}>
                            <Typography variant='h4'>
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Typography variant="subtitle1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <Button  color="primary" 
                                className={classes.aboutButton}>
                                Learn More
                            </Button>
                        </Grid>
                        <Grid item md={5} sm={6} >
                            <img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg"
                             alt="text"
                             className={classes.aboutsubimg}/>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={12} sm={5}  >
                            <img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/img-2_vdgqgn.jpg"
                                alt="text"
                                className={classes.aboutsubimg} />
                        </Grid>
                        <Grid item sm={5} xs={12} className={classes.subGrid}>
                            <Typography variant='h4'>
                                Lorem ipsum dolor sit amet
                            </Typography>
                            <Typography variant="subtitle1">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Typography>
                            <Button color="primary"
                                className={classes.aboutButton}>
                                Learn More
                            </Button>
                        </Grid>
                    </Grid>
                </Container>

                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                           <Typography variant="h3" > 
                                Our Team
                           </Typography>
                        </Grid>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <Grid sm={12} className={classes.cardlogo}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    </Grid>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Name
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {/* <Button size="small" >
                                        <FacebookIcon  />
                                        </Button>
                                        <Button size="small" >
                                            <LinkedInIcon />
                                        </Button> */}
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
