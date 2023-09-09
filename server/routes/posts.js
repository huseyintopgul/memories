import express from 'express';

import { getPosts, createPost } from '../controllers/post.js';

const router = express.Router();

// routers
router.get('/', getPosts);
router.post('/', createPost);





export default router; 