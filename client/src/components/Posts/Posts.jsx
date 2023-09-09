import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyle from './styles.js';
import { CircularProgress, Grid } from '@mui/material';


const Posts = () => {
  const styleClass = useStyle();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    !posts.length ? (<CircularProgress />) : (
      <Grid className={styleClass.container} container alignItems="stretch" spacing={3}>
        {
          posts.map((post, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))
        }
      </Grid>
    )
  )
}

export default Posts