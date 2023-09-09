import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js'

const router = express.Router();
// GET POSTS METHOD
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
};
// CREATE POST CONTROLER
export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
// UPDATE POST CONTROLER
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return (
            res.status(404).send("İlgili anı bulunamadı.")
        )
    };
    const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatePost);
};
// DELETE POST CONTROLER
export const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return (
            res.status(404).send('Anı silinemedi.')
        )
    }
    await PostMessage.findByIdAndRemove(_id);
    res.json('Silme işlemi başarılı.')
};
// LIKE POST CONTROLER
export const likePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return (
            res.status(404).send('Beğeni işlemi gerçekleşmedi.')
        )
    }
    const post = await PostMessage.findById(id);
    const updatePost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    res.json(updatePost);
};


export default router;