import React, { useState } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import './home.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:theme.spacing(2),
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/main_home_img.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center',
      padding:theme.spacing(12, 2, 12 ,2),
    },
  },
  mainTitle: {
    position: 'relative',
    top: '15%',
    justify: 'center',
    [theme.breakpoints.down('md')]: {
    },
  },
  paper: {
    width:440,
    padding:theme.spacing(3,3),
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 17px',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
  textFieldBox: {
    margin: theme.spacing(18,12),
    [theme.breakpoints.down('md')]:{
      margin: theme.spacing(15, 4),
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(3, 10),
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3, 0),
    },
  },
  textField: {
    margin: theme.spacing(1, 0),
  },
  dateField: {
    margin: theme.spacing(2, 0, 4, 0),
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const date = new Date("yyyy-MM-ddThh:mm");
  const[selectDate, setSelectDate] = useState(date.toLocaleTimeString());

  const handleChange = () => {
    setSelectDate(Date);
  }

  return(
    <>
      <div className={classes.root}>
          <Grid container justify="space-evenly">
            <Grid item md className={classes.textFieldBox}>
                <Typography
                  variant="h3"
                  color="primary"
                  className={classes.mainTitle}
                  gutterBottom
                >
                 Ride Together Today
              </Typography>
              <Typography variant="body2" className={classes.mainTitle}>
                Choose from a range of categories and prices
              </Typography>
            </Grid>
            <Grid item md className={classes.textFieldBox}>
              <Paper className={classes.paper}>
                <TextField
                  className={classes.textField}
                  label="PickUp Location"
                  variant="standard"
                  fullWidth
                />
                <TextField
                  className={classes.textField}
                  label="DropOff Location"
                  variant="standard"
                  fullWidth
                />
                <TextField
                  className={classes.dateField}
                  label="Data and Time"
                  type="datetime-local"
                  variant="standard"
                  defaultValue={selectDate}
                  onChange={handleChange}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button
                  className="main_card_button"
                  color="primary"
                  variant="contained"
                  disableElevation
                >
                  <span className="span">Book A Ride</span>
                </Button>
                <Button
                  className={"main_card_button"}
                  color="primary"
                  variant="contained"
                  disableElevation
                >
                  <span className="span">Offer A Ride</span>
                </Button>
              </Paper>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
      </div>
    </>
  );
}
export default Home;