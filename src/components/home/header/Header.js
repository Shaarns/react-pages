import React from 'react'
import { Link, makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    margin: theme.spacing(0, 8),
    flexGrow: 0.88,
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 2),
    },
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='absolute' color='transparent'>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant='h5' className={classes.title}>
            Carpool
          </Typography>
          <Link href='/login'>Login</Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
