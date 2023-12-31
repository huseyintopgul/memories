import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../redux/actions/PostActions';


const Form = ({ currentId, setCurrentId }) => {
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const styleClass = useStyles();
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        };
        clear();
    };
    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    };
    useEffect(() => {
        if (post) setPostData(post);
    }, [post])
    return (
        <Paper className={styleClass.paper}>
            <form autoComplete="off" noValidate className={`${styleClass.root} ${styleClass.form}`} onSubmit={handleSubmit}>
                <Typography color='primary' variant="h6">{currentId ? 'Anıyı Düzenle' : 'Anı Oluştur'} </Typography>
                <TextField name="creator" variant="outlined" label="Ad Soyad" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Başlık" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Açıklama" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Etiketler" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <FileBase className={styleClass.fileInput} type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                <Button style={{ marginBottom: '10px', marginTop: '10px' }} variant="contained" color='success' size="medium" type="submit" fullWidth> Onayla </Button>
                <Button variant="contained" color='secondary' size="medium" onClick={clear} fullWidth> Temizle </Button>
            </form>
        </Paper>
    )
}

export default Form;