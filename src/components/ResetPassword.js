import React from "react";
import { Checkbox, Container, FormControlLabel, Grid, Link } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    heading: {
        fontWeight: 'bold',
        margin: theme.spacing(12, 0, 2, 0),
    },
    form: {
        margin: theme.spacing(3),
        minWidth: '250px',
    },
    container: {
        minWidth: '400px',
    },
    textmargin: {
        margin: theme.spacing(2, 0, 1, 0),
    },
    buttonSend: {
        margin: theme.spacing(1, 2, 2, 0),

    },
}));

const ResetPassword = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm" className={classes.container}>
            <form className={classes.form} method="POST">
                <Grid item xs={12}>
                    <Typography
                        className={classes.heading}
                        variant="h4" 
                        color="primary">
                            Reset Password
                    </Typography>   
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <TextField 
                            id="previousPass" 
                            label="Previous Password" 
                            variant="standard" 
                            fullWidth
                            className={classes.textmargin}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            id="password"
                            label="New Password"
                            type="password"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            id="confirmspass"
                            type="password"
                            label="Confirm Password"
                            variant="standard"
                            fullWidth
                        />
                    </Grid>
                    <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />}
                        label="Remember Me"
                        className={classes.textmargin}
                    />
                    <Grid item xs={12}>
                        <div className={classes.button}>
                            <Button
                                className={classes.buttonSend}
                                color="primary"
                                variant="contained"
                                size="large"
                                disableElevation
                            >
                                Reset
                        </Button>
                            <Button
                                className={classes.buttonSend}
                                color="primary"
                                variant="outlined"
                                size="large"
                                disableElevation
                            >
                                Cancel
                        </Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </Container>

    );
}
export default ResetPassword;