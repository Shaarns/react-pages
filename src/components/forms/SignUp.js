import React, { useState } from 'react';
import Grid from '@material-ui/core/grid';
import {
  Container,
  Typography,
  Button,
  TextField,
  Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(5, 0),
    padding: theme.spacing(6, 8),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 0),
    },
  },
  backButton: {
    position: "relative",
    top: 40,
  },
  form: {
    margin: theme.spacing(2, 0),
  },
  textField: {
    margin: theme.spacing(2, 0),
  },
  button: {
    margin: theme.spacing(2, 0),
    width: "100px",
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("email " + values.email + " pass " + values.password);
    event.preventDefault();
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Grid container className={classes.paper} spacing={1}>
          <Grid item xs={12}>
            <Link href="/" className={classes.backButton}>
              <ArrowBackIcon />
            </Link>
            <Typography
              align="center"
              color="textPrimary"
              variant="h4"
            >
              Carpool
              </Typography>
          </Grid>
          <Grid item xs={12} className={classes.form}>
            <form onSubmit={handleSubmit} method="POST">
              <TextField
                className={classes.textField}
                id="email"
                label="Mobile no. or Email"
                fullWidth
                value={values.email}
                onChange={handleChange('email')}
                // onChange={handleChangeEmail}
                autoComplete="off"
              />
              <Button
                href="/enterotp"
                className={classes.button}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                Next
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
