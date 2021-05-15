import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function AvailableRides() {
  return (
    <div>
      <Container>
        <Grid container>
          <Card>
            <CardMedia />
            <CardContent>
              <Grid item container spacing={2}>
                <Grid item xs >
                  <Typography>
                    Name:
                    </Typography>
                </Grid>
                <Grid item xs>
                  <Typography>
                    Full name:
                    </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </div>
  )
}
