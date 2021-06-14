import React, { useState } from 'react';
import Grid from '@material-ui/core/grid';
import { Container, Typography, Button, IconButton, InputAdornment, Input, InputLabel, FormControl } from '@material-ui/core';
// import { Checkbox } from '@material-ui/core';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) =>({
  paper: {
    margin: theme.spacing(5, 0),
    padding: theme.spacing(6, 8),
    [theme.breakpoints.down('xs')]:{
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
  textField:{
    margin: theme.spacing(1,0),
  },
  button: {
    margin: theme.spacing(3, 0),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [values, setValues] = useState({
    mobile: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value});
  };

  const handleClickShowPassword = () => {
    setValues({...values , showPassword: !values.showPassword});
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  const handleSubmit = (event) => {
    alert("email " + values.mobile + " pass " + values.password);
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
                  id="mobile"
                  label="Mobile no."
                  fullWidth
                  value={values.email}
                  onChange={handleChange('mobile')}
                  // onChange={handleChangeEmail}
                  autoComplete = "off"
                />
                <FormControl fullWidth>
                <InputLabel htmlFor="password">Pin</InputLabel>
                <Input
                  className={classes.textField}
                  id="password"
                  label="Password"
                  type={values.showPassword ? "text" : "password"}
                  onChange={handleChange('password')}
                  value={values.password}
                  // onChange={handleChangePass}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                </FormControl>
                {/* <FormControlLabel
                  className={classes.textField}
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Remember Me"
                /> */}
                <Button
                  className={classes.button}
                  variant="contained"
                  // fullWidth
                  color="primary"
                  size="large"
                  type="submit"
                >
                  LogIn
                </Button>
                <Typography className={classes.textField}>
                  <Link href="" variant="body2">
                    Forget Password?
                  </Link>
                </Typography>
              </form>
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}
