import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    heading: {
        fontWeight: 'bold',
        margin: theme.spacing(12, 0, 1, 0),
    },
    form: {
        margin: theme.spacing(3),
        minWidth: '250px',
    },
    container: {
        minWidth: '400px',
    },
    textmargin: {
        margin: theme.spacing(1, 0, 1, 0),
    },
    button: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'right',
    },
    buttonSend: {
        margin: theme.spacing(3, 2, 6, 0),
    },
    buttonResend: {
        margin: theme.spacing(3, 2, 6, 0),
    }
}));

const ForgetPassword = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm" className={classes.container}>
            <form className={classes.form} method="POST">
                <Grid item xs={12}>
                    <Typography
                        color="primary"
                        className={classes.heading}
                        variant="h4">
                        Forget Password?
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        className={classes.textmargin}
                        variant="h6">
                        Enter Email Id to send verification code
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <TextField
                            className={classes.textmargin}
                            fullWidth
                            variant="standard"
                            id="email"
                            placeholder="Email Id"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.button}>
                            <Button
                                className={classes.buttonSend}
                                color="primary"
                                size="large"
                                variant="contained"
                                >
                                Next
                        </Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </Container>

    );
}
export default ForgetPassword;