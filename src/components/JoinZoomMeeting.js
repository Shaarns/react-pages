import React from "react";
import { Container, FormControlLabel, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   
    heading: {
        fontWeight: 'bold',
        color: '#2196f3',
        margin:theme.spacing(8,0,1,0),
    },
    form: {
        margin:theme.spacing(3),
        minWidth:'250px',
    },
    container:{
        minWidth:'400px',
    }, 
   textmargin:{
       margin:theme.spacing(1,0,1,0),
   },
   options:{
       display:'flex',
       flexDirection:'column',
       margin:theme.spacing(1,0,0,2),
   },
   button: {
        display:'flex',
        flexDirection:'row-reverse',
        justifyContent:'right',
   },
   buttonmargin: {
        margin:theme.spacing(3,2,6,0),
   },
}));

const JoinZoomMeeting = () => {
    const classes = useStyles();
    return(
        <Container component="main" maxWidth="sm" className={classes.container}>
            <form className={classes.form} method="POST">
            <Grid item xs={12}>
                    <Typography
                        className={classes.heading}
                        variant ="h4">
                        Join meeting
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        className={classes.textmargin}
                        variant ="h6">
                        Meeting Id or Personal Link Name
                    </Typography>
                </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <TextField 
                        className={classes.textmargin}
                        fullWidth
                        variant="standard"
                        id="topic"
                        placeholder ="Enter Meeting ID Or Personal Link Name" 
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />              
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        fullWidth
                        variant="standard"
                        id="topic"
                        placeholder ="Enter Meeting ID Or Personal Link Name" 
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />              
                </Grid>
                <div className={classes.options}>
                    <Typography 
                        variant="subtitle1"
                        color="secondary">
                        Options
                    </Typography>                        
                    <FormControlLabel 
                        control={<Checkbox name="checkedB" 
                        color="primary" />}
                        label="Remember me for future meetings" 
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedB" 
                        color="primary" />}
                        label="Don't connent to audio" 
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedB" 
                        color="primary" />}
                        label="Automatically record meeting 
                        on the local computer." 
                    />
                </div>
                <Grid item xs={12}>
                    <div className={classes.button}>
                       <Button 
                            className={classes.buttonmargin}
                            variant ="contained"
                            size="large"
                            color="primary">
                            Schedule
                        </Button>
                        <Button 
                            className={classes.buttonmargin}
                            variant="outlined"
                            size="large"
                            color="secondary">
                                Cancel
                        </Button>
                    </div>
                </Grid>
            </Grid>
            </form>
        </Container>

);        
}
export default JoinZoomMeeting;