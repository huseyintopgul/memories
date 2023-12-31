import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyle from './styles.js';
import { deletePost, likePost } from '../../../redux/actions/PostActions.js';


const Post = ({ post, setCurrentId }) => {
    const styleClass = useStyle();
    const dispatch = useDispatch();


    return (
        <Card className={styleClass.card}>
            <CardMedia className={styleClass.media} component="img" image={post.selectedFile} alt={post.title} title={post.title} />
            <div className={styleClass.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).format('DD-MM-YYYY')}</Typography>
            </div>
            <div className={styleClass.overlay2}>
                <Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id)}>
                    <EditNoteIcon fontSize="medium" />
                </Button>
            </div>
            <div className={styleClass.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={styleClass.title} gutterBottom variant="h5">{post.title}</Typography>
            <CardContent>
                <Typography className={styleClass.description} color='textSecondary' component='p'>{post.message}</Typography>
            </CardContent>
            <CardActions className={styleClass.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" /> &nbsp; Beğen &nbsp; {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" /> &nbsp; Sil &nbsp;
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post