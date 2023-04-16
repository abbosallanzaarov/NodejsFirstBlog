import {Router} from 'express';
import {  createPost, deletePost, updatePage, updatePost } from '../controllers/post.controler';
const route = Router()
route.post('/add' , createPost)
route.get('/delete/:id', deletePost)
route.get('/updatePage/:id' ,  updatePage)
route.post('/update/:id' , updatePost)


export default route