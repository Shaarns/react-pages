import React , {useState }from "react";
import { Container, FormControlLabel, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Checkbox } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    form: {
        width:'100%',
        minWidth:'300px',
    },
    container:{
        minWidth:'400px',
    },
   appbar:{
        display:'flex',
        flexGrow:'1',
        justifyContent:'center',
   },
   appbarmargin:{
       marginBottom:theme.spacing(2),
   },
   textmargin:{
       margin:theme.spacing(1,0,1,0),
   },
   options:{
       display:'flex',
       flexDirection:'column',
   },
   buttonmargin:{
       margin:theme.spacing(3,2,6,0),
   }
}));

export function Form(){         

    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const handleChangebox = () =>{
        setChecked(previousval => !previousval)
        setDisabled(prevValue => !prevValue)
    }
    const classes = useStyles();    

    const  submit= async() => { 
    axios({
        method: 'get',
        url: 'https://api.zoom.us/v2/users/me/meetings',
        data: {
            'action': 'create',
            "user_info": {
            'email': 'dhjdfkghdskjf@fgkjfdlgjfkd.gh',
            'type': 1,
            'first_name': 'Terry',
            'last_name': 'Jones'
            }
        },
        headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InA0dDEwU0cxU2ktMFdRMEtsMkYtbWciLCJleHAiOjE2MTc3Njk2OTksImlhdCI6MTYxNzY4MzMwNn0.WQcmKX659pRWDgCQ8lXtRFSBSEuFchbYQI8Gswcn3Iw',
        'User-Agent': 'Zoom-api-Jwt-Request',
        'content-type': 'application/json'
      
        }
        }).then(function(response) {
        //handle success
        console.log(response);
        })
        .catch(function(response) {
        //handle error
        console.log(response);
        });
    }
    
    return(
        <Container component="main" maxWidth="sm" className={classes.container}>
            <AppBar position="static" className={classes.appbarmargin}>
                <Toolbar>
                    <Typography 
                        className={classes.appbar}
                        variant ="h6">
                            Schedule Meeting
                    </Typography>       
                </Toolbar>
            </AppBar>
            <form className={classes.form}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField 
                        fullWidth
                        variant="outlined"
                        id="topic"
                        label ="Enter Topic" 
                    />               
                </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            fullWidth
                            id="date-time"
                            label= "From"
                            type="datetime-local"
                            variant= "outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            fullWidth
                            id="date-time"
                            label= "To"
                            type="datetime-local"
                            variant= "outlined"
                            InputLabelProps={{
                                 shrink: true,
                            }}
                        />
                    </Grid> 
                    <Grid item xs={12}>
                        <TextField 
                            variant= "outlined"
                            fullWidth
                            label="ClassID"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl>
                            <FormLabel
                                className={classes.textmargin}>
                                Meeting ID
                            </FormLabel>
                            <FormControlLabel 
                                value ="Generate Automatically"
                                control={<Radio color="primary"/> }
                                label ="Generate Automatically"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormLabel 
                            className={classes.textmargin}>
                            Security
                        </FormLabel>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            control={<Checkbox name="checkedB" 
                            checked={checked}
                            onChange={handleChangebox}
                            color="primary" />}
                            label="Generate Automatically" 
                        />             
                    </Grid>    
                    <Grid item xs={12} sm={6}>
                        <TextField 
                            variant = "standard"
                            disabled={disabled}
                            id= "password"
                            type= "password"    
                            label= "password"
                        />
                    </Grid>
                    <hr/>
                    <Grid item xs={12}>
                        <Typography 
                            variant ="subtitle1" color="primary">
                            Video
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel 
                            className={classes.textmargin}
                            component="legend">Host
                        </FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                        <RadioGroup 
                            row aria-label="position" 
                            name="position">
                            <FormControlLabel
                                value="On"
                                control={<Radio color="primary" />}
                                label="On"
                            />
                            <FormControlLabel 
                            value="Off" 
                            control={<Radio color="primary" />} 
                            label="Off" />
                    </RadioGroup>
                    </Grid>
                    <Grid item xs={4}>
                        <FormLabel 
                            className={classes.textmargin}
                            component="legend">
                            Participants
                        </FormLabel>
                    </Grid>
                    <Grid item xs={8}>
                        <RadioGroup 
                            row aria-label="position" 
                            name="position" 
                            defaultValue="top"
                            >
                            <FormControlLabel
                                value="On"
                                control={<Radio color="primary" />}
                                label="On"
                            />
                            <FormControlLabel 
                                value="Off" 
                                control={<Radio color="primary" />} 
                                label="Off" />
                        </RadioGroup>
                    </Grid>
                    <div className={classes.options}>
                        <Typography 
                            variant="subtitle1"
                            color="secondary">
                            Advanced Options
                        </Typography>                        
                        <FormControlLabel 
                            control={<Checkbox name="checkedB" color="primary" />}
                            label="Enable join before host" 
                        />
                        <FormControlLabel
                            control={<Checkbox name="checkedB" color="primary" />}
                            label="Mute participants upon entry" 
                        />
                        <FormControlLabel
                            control={<Checkbox name="checkedB" color="primary" />}
                            label="Automatically record meeting 
                            on the local computer." 
                        />
                    </div>
                    <div>
                        <Button 
                            className={classes.buttonmargin}
                            onClick={submit}
                            variant ="contained"
                            color="primary"
                            size="large">
                            Schedule
                        </Button>
                        <Button 
                            className={classes.buttonmargin}
                            variant="contained"
                            color="secondary"
                            size="large">
                                Cancel
                        </Button>
                    </div>
                </Grid>
            </form>
        </Container>
    );    
}
