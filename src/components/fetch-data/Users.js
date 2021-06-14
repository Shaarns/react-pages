import React from 'react'
import {
  Grid,
  Card,
  Avatar,
  Paper,
  CardContent,
  Typography,
  Link,
} from '@material-ui/core'

const Users = ({ avatar, name, profile, id }) => {
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Paper elevation={5}>
        <Card
          style={{ display: 'flex', alignItems: 'center', padding: '0 2rem' }}
        >
          <Avatar alt='git users' src={avatar} />
          <CardContent>
            <Typography variant='h6'>{name}</Typography>
            <Link href={profile}>profile</Link>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  )
}
export default Users
