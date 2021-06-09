import React, { useState, useEffect } from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import Users from './Users'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  // another way to fetch data
  // const getUser = async () => {
  //   const response = await fetch(url);

  //   const users =  await response.json();
  //   setUsers(users);
  //   console.log(users);
  // }

  useEffect(() => {
    // getUser();
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          setError(true)
          setLoading(false)
          throw new Error(`${res.status}`)
        }
      })
      .then((user) => {
        if (user) {
          setUsers(user)
          setLoading(false)
        }
      })
      .catch((error) => console.log(error))
    // return () => {
    //   cleanup
    // }
  }, [])

  if (isLoading) {
    return (
      <div>
        <Typography variant='h1' align='center'>
          Loading ....
        </Typography>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <Typography variant='h1' align='center'>
          Error
        </Typography>
      </div>
    )
  }
  return (
    <Container maxWidth='lg'>
      <h1>fetch data</h1>
      <br />
      <Grid container spacing={4}>
        {users.map((user) => {
          const { avatar_url, login, id, html_url } = user
          return (
            <Users
              key={id}
              avatar={avatar_url}
              name={login}
              id={id}
              profile={html_url}
            />
          )
        })}
      </Grid>
    </Container>
  )
}
export default FetchData
