import express from 'express';

import { getPosts, createPost, updatePost, deletePost } from '../controllers/post.js';

const router = express.Router();

// routers
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost');





export default router; 