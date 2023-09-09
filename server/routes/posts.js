import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/post.js';

const router = express.Router();

// routers
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost)





export default router; 