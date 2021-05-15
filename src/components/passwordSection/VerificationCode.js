import React from "react";
import { Container, Grid, Link } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    heading: {
        fontWeight: 'bold',
        margin: theme.spacing(12, 0, 5, 0),
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
    button: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'right',
    },
    buttonSend: {
        margin: theme.spacing(2, 2, 2, 0),
        borderRadius:'40px',

    },
    buttonResend: {
        margin: theme.spacing(3, 2, 6, 0),
    }
}));

const VerificationCode = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm" className={classes.container}>
            <form className={classes.form} method="POST">
                <Grid item xs={12}>
                    <Typography
                        className={classes.heading}
                        variant="h4"
                        color="primary">
                        Check your email
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        className={classes.textmargin}
                        variant="body1">
                        We sent your code to your email
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <TextField
                            className={classes.textmargin}
                            fullWidth
                            variant="standard"
                            id="code"
                            placeholder="Enter verification code"
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
                                variant="contained"
                                disableElevation
                            >
                                Submit
                        </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                            <Typography variant="subtitle1">
                            <Link href="#" >
                                Didn't receive your code?
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </Container>

    );
}
export default VerificationCode;