import React from 'react'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  media: {
    width: 400,
    height: 180,
  },
}))

const Links = () => {
  const classes = useStyles()

  const card = [
    {
      title: 'Tic Tac Toe',
      description: 'Enter to Visit',
      images: '../images/game.jpg',
      link: './game',
    },
    {
      title: 'Todo App',
      description: 'Enter to Visit',
      images: '../images/todo.png',
      link: './todo',
    },
    {
      title: 'Calculator',
      description: 'Enter to Visit',
      images: '../images/calculator.png',
      link: './calculator',
    },
  ]

  return (
    <Container maxWidth='lg'>
      <Typography align='center' variant='h4' color='primary' gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} className='cardContainer'>
        {card.map((items) => (
          <Grid item xs={12} md={4}>
            <Card className='card'>
              <CardActionArea href={items.link}>
                <CardMedia
                  className={classes.media}
                  image={items.images}
                  title={items.title}
                />
                <CardContent>
                  <Typography variant='h5' color='primary' gutterBottom>
                    {items.title}
                  </Typography>
                  <Typography variant='body1' color='textSecondary'>
                    {items.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

    // <div>
    //   <div className='completeProjects'>
    //     <h2>Projects</h2>
    //   </div>
    //   <section className='li}}nk-page'>
    //     <a href='/game'>Tic Tak Toe Game</a>
    //     <a href='/todo'>Todo App</a>
    //     <a href='/calculator'>Calculator</a>
    //   </section>
    //   <div className='incompleteTasks'>
    //     <h2>Incomplele Projects</h2>
    //   </div>
    //   <section className=' link-page'>
    //     <a href='/imageslider'>Image Slider</a>
    //     <a href='/carpool-homepage'>Carpool Homepage</a>
    //     <a href='/classprofile'>Class Profile design</a>
    //     <a href='/teacherprofile'>Teacher Profile design</a>
    //     <a href='/counter'>Counter</a>
    //     <a href='/practice'>Practice</a>
    //     <a href='/reducers'>Use Reducers Demo</a>
    //     <a href='/userefbasic'>Use Ref Demo</a>
    //     <a href='/fetchdata'>Fetch Data Demo</a>
    //     <a href='/signup'>Sign Up Form</a>
    //     <a href='/social-app'>Social App Demo</a>
    //   </section>
    // </div>
  )
}

export default Links
