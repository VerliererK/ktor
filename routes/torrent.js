import express from 'express';
const router = express.Router();
import { list, add, remove } from '../controllers/torrentController.js';

router.get('/list', list);
router.get('/add', add);
router.get('/remove', remove);

export default router;
