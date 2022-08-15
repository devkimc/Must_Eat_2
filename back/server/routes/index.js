import { Router } from 'express';
import auth from './auth';
import favRest from './favRest';
import group from './group';

const router = Router();

router.use('/auth', auth);
router.use('/fav-rest', favRest);
router.use('/group', group);

export default router;
