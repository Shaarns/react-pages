import React, { useState, useEffect } from 'react'
import {
  Container,
  Grid,
  Hidden,
  Paper,
  Card,
  CardContent,
  Typography,
  Link,
  Avatar,
  makeStyles,
} from '@material-ui/core'

const url = 'https://api.github.com/users'
const useStyles = makeStyles((theme) => ({
  root: {},
  memberImage: {
    height: '600px',
    width: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(0, 1),
  },
}))

const Home = () => {
  const [people, setPeople] = useState([])

  const classes = useStyles()

  const getUser = async () => {
    const resposne = await fetch(url)
    const users = await resposne.json()
    setPeople(users)
    console.log(users)
  }
  useEffect(() => {
    getUser()
    return () => {}
  }, [])

  return (
    <>
      <section>
        <Container maxWidth='md'>
          <Grid container spacing={6}>
            <Grid item container xs={12} sm={8} spacing={2} direction='column'>
              {people.map((members) => (
                <Grid item key={members.id} className={classes.cardContainer}>
                  <Paper variant='outlined'>
                    <Card className={classes.cardContent}>
                      <div className={classes.cardHeader}>
                        <Avatar src={members.avatar_url} alt='user avatar' />
                        <CardContent>
                          <Typography variant='body1 '>
                            {members.login.toUpperCase()}
                          </Typography>
                        </CardContent>
                      </div>
                      <img
                        alt='git users'
                        src={members.avatar_url}
                        className={classes.memberImage}
                      />
                      <CardContent>
                        <Typography variant='body1 '>
                          Like, share, comment, send
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Hidden xsDown>
              <Grid item container xs={false} sm={true} direction='column'>
                {people.map((members) => (
                  <Grid item key={members.id} className={classes.cardHeader}>
                    <Avatar src={members.avatar_url} alt='suggestions avatar' />
                    <CardContent>
                      <Typography variant='body1 '>{members.login}</Typography>
                    </CardContent>
                  </Grid>
                ))}
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </section>
    </>
  )
}
export default Home
