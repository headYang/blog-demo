import * as express from 'express';
import { getAllPosts, getPostById, updatePost, deleteById, createPost} from '../controllers/PostController';


export default (app) => {
    const apiRoutes = express.Router();
    const postRoutes = express.Router();

    /**********post routes********/
    apiRoutes.use('/posts', postRoutes);
    
    postRoutes.get('/', getAllPosts);
    postRoutes.get('/:id', getPostById);
    postRoutes.post('/', createPost);
    postRoutes.put('/:id', updatePost);
    postRoutes.delete('/:id', deleteById);


    app.use('/api', apiRoutes);
}