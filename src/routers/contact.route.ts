import { Router } from "express";
import getContact from '../controllers/contact.controller';
import { profiProtection } from "../middleware/profil.middleware";

const router = Router()

router.get('/' , profiProtection ,  getContact)
export default router