import { Router } from 'express';
import auth from './auth'
import favRest from './favRest'
import kakao from './kakao'

const router = Router();

router.use("/api/auth", auth)
router.use("/api/fav-rest", favRest)
router.use("/api/kakao", kakao)

export default router;
