import express from 'express'
import { getPosts, createPost, likePost, retweetPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id/likePost', likePost)
router.patch('/:id/retweetPost', retweetPost)

export default router;