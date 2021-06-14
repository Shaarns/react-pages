import React, { useState } from 'react'
import { Paper, TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 440,
    padding: theme.spacing(3, 3),
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 17px',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
  textFieldBox: {
    margin: theme.spacing(18, 12),
    [theme.breakpoints.down('md')]: {
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
}))

const CarBookingForm = () => {
  const classes = useStyles()
  const currentDate = new Date(new Date().toString().split('GMT')[0] + ' UTC')
    .toISOString()
    .substr(0, 19)
  const [values, setValues] = useState({
    pickup: '',
    dropoff: '',
    dateTime: currentDate,
  })

  const handleChange = (event) => {
    const name = event.target.id
    setValues({ ...values, [name]: event.target.value })
  }
  console.log(values)

  const handleSubmitBook = (event) => {
    event.preventDefault()
    console.log()
  }
  const handleSubmitOffer = (event) => {
    event.preventDefault()
  }

  return (
    <Paper className={classes.paper}>
      <form>
        <TextField
          id='pickup'
          value={values.pickup}
          className={classes.textField}
          label='PickUp Location'
          onChange={handleChange}
          fullWidth
        />
        <TextField
          className={classes.textField}
          id='dropoff'
          label='DropOff Location'
          value={values.dropoff}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          id='dateTime'
          label='Next appointment'
          type='datetime-local'
          defaultValue={currentDate}
          onChange={handleChange}
          fullWidth
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          className='main_card_button'
          color='primary'
          variant='contained'
          onSubmit={handleSubmitBook}
          disableElevation
        >
          <span className='span'>Book A Ride</span>
        </Button>
        <Button
          className={'main_card_button'}
          color='primary'
          variant='contained'
          onSubmit={handleSubmitOffer}
          disableElevation
        >
          <span className='span'>Offer A Ride</span>
        </Button>
      </form>
    </Paper>
  )
}
export default CarBookingForm
