import React from 'react'

import Img from 'react-image'

import { makeStyles, Box, Container, Typography } from '@material-ui/core'

import ProTip from '../src/ProTip'
import Link from '../src/bits/Link'
import Copyright from '../src/Copyright'

const useStyles = makeStyles((theme) => ({
  main: {},
  img: {
    width: '100%',
  },
  icon: {
    width: 100,
    margin: '50px auto',
    display: 'block',
  },
}))

export default function Index() {
  const classes = useStyles()

  return (
    <main
      className={classes.main}
    >
      <Img
        className={classes.img}
        src={[
          require('../images/astronaut.jpg?webp'),
          require('../images/astronaut.jpg'),
        ]}
        loader={<img src={require('../images/astronaut.jpg?trace').trace} alt={'loader'} />}
      />
      <Img
        className={classes.icon}
        src={require('../images/next-js.svg?inline')}
      />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <br />
          <Link href="/next" color="secondary">
            Go to the next.js page
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </main>
  )
}