import {Router} from 'express'
import { addPage } from '../controllers/addpage.controller'
import { profiProtection } from '../middleware/profil.middleware'
const router = Router()
router.get('/' , profiProtection ,  addPage)
export default router