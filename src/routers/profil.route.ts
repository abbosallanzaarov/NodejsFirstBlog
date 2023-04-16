import {Router} from 'express'
import { allPost } from '../controllers/post.controler';
import { profiProtection } from "../middleware/profil.middleware";

const router = Router()
router.get('/', profiProtection ,   allPost)
export default router