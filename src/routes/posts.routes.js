import express from 'express';
import {
  createPosts,
  updatePostById,
  deletePostById,
  showPostById,
  showPostByTerm,
  showAllPosts
} from '../controllers/posts.controllers.js'; 

const router = express.Router();
router.post('/create', createPosts);
router.put('/posts/:id', updatePostById);
router.delete('/posts/:id', deletePostById);
router.get('/posts/:id', showPostById);
router.get('/posts', showPostByTerm);

export default router;
