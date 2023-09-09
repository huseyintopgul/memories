import React, { useEffect } from 'react';
import { AppBar, Container, Grid, Typography, Grow } from '@mui/material';
import { useDispatch } from 'react-redux';

import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles.js';
import {getPosts} from './redux/actions/PostActions'

const App = () => {
  const styleClass = useStyles();
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={styleClass.appBar} position='static' color='inherit' >
        <Typography className={styleClass.heading} variant='h2' align='center' > Memories
          <img className={styleClass.image} src={memories} alt='memories' height='50' />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3} >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App