import React from "react";
import { Container,  Grid, Input } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
   
    heading: {
        fontWeight: 'bold',
        margin:theme.spacing(8,0,1,0),
        textAlign : "center",
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
  
    buttonmargin: {
        margin:theme.spacing(3,2,6,0),
    },
}));

export function Studentdoc(){         
    const classes = useStyles();    
    
    return(
        <Container component="main" maxWidth="sm" className={classes.container}>
            <form className={classes.form}>
            <Grid item xs={12}>
                    <Typography 
                        className={classes.heading}        
                        variant ="h4">
                        Students Details
                    </Typography>
                </Grid>
                
            <Grid container spacing={1}>
                <Grid item xs={12} >
                    <TextField 
                        className={classes.textmargin}
                        fullWidth
                        variant="standard"
                        id="topic"
                        label = "Name"
                        placeholder ="FullName" 
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />              
                </Grid>
                <Grid item xs={12} >
                    <Typography
                        className={classes.textmargin}
                        variant="button" display="block" gutterBottom>
                        School/College Id Card
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file-1"
                        multiple
                        type="file" 
                    />
                    <label htmlFor="contained-button-file-1">
                        <Button variant="contained"  component="span">
                            Upload
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={12} >
                    <Typography
                        className={classes.textmargin}
                        variant="button" display="block" gutterBottom>
                            Highschool Qualification 10 certificate
                        </Typography>
                </Grid>
                <Grid item xs={12} >
                <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file-2"
                        multiple
                        type="file" 
                        
                    />
                    <label htmlFor="contained-button-file-2">
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label> 
                </Grid>
                <Grid item xs={12} >
                    <Typography
                        className={classes.textmargin}
                        variant="button" display="block" gutterBottom>
                            Intermediate Qualification 12 certificate
                        </Typography>
                </Grid>
                <Grid item xs={12} >
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-fil-3"
                        multiple
                        type="file" 
                    />
                    <label htmlFor="contained-button-file-3">
                        <Button variant="contained"  component="span">
                            Upload
                        </Button>
                    </label>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.button}>
                        <Button 
                            className={classes.buttonmargin}
                            variant ="contained"
                            size="large"
                            color="primary">
                            Submit
                        </Button>
                        <Button 
                            className={classes.buttonmargin}
                            variant="outlined"
                            size="large"
                            color="secondary">
                            Reset
                        </Button>
                    </div>
                </Grid>
            </Grid>
            </form>
        </Container>
);        
}
