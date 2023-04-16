import { Router } from "express";
import getAbout from '../controllers/about.controller';
import { profiProtection } from "../middleware/profil.middleware";
const router = Router()

router.get('/', profiProtection ,  getAbout)

export default router