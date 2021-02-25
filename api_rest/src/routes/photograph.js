import { Router } from 'express';
import photographController from '../controllers/Photograph';

const router = new Router();

router.post('/', photographController.store);
export default router;
