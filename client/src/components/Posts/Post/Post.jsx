import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';

import moment from 'moment';
import { useDispatch } from 'react-redux';

import useStyle from './styles.js';


const Post = ({ post }) => {
    const styleClass = useStyle();
    const dispatch = useDispatch();

    return (
        <Card className={styleClass.card}>
            <CardMedia className={styleClass.media} component="img" image={post.selectedFile} alt={post.title} title={post.title} />
            <div className={styleClass.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={styleClass.overlay2}>
                <Button style={{ color: 'white' }} size='small' onClick={() => { }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={styleClass.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={styleClass.title} gutterBottom variant="h5">{post.message}</Typography>
            </CardContent>
            <CardActions className={styleClass.cardActions}>
                <Button size="small" color="primary" onClick={() => {}}>
                    <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() =>{}}>
                    <DeleteIcon fontSize="small" /> Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post