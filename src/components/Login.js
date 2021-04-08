import React from 'react';
import Grid from '@material-ui/core/grid';
import { Container, Typography, Paper, Button } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@materail-ui/core';


const useStyles = makeStyles({
    paperStyles: {
        height: '65vh', 
        width:'50vh',
        padding:'10px 25px' ,
        margin:'auto',
    
    },
    formStyles : {
        margin:'25px 0px',
        align:"left",
    },
    });


export default function Login() {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <Paper variant="outlined" square className={classes.paperStyles}>
                    <Grid align="center">
                        <Typography
                            color="textPrimary"
                            variant="h4"
                            className={classes.formStyles}>
                            Login
                        </Typography>
                    </Grid>
                    <form>
                        <TextField
                            id="email"
                            label="Email"
                            fullWidth
                            className={classes.formStyles} 
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                        />
                        <FormControlLabel
                            control={<Checkbox name="checkedB" color="primary" />}
                            label="Remember Me" 
                        />
                        <Button
                            variant="contained"
                            fullWidth
                            color="primary"
                            size="large"
                            className={classes.formStyles}>
                            LogIn
                        </Button>
                        <Typography>
                            <Link href="" variant="body2">
                                Forget Password?
                            </Link>
                        </Typography>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}
