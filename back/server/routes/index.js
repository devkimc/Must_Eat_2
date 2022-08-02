import { Router } from 'express';
import auth from './auth'
import favRest from './favRest'
import kakao from './kakao'
import group from './group'

const router = Router();

router.use("/auth", auth)
router.use("/fav-rest", favRest)
router.use("/kakao", kakao)
router.use("/group", group)

export default router;
