import express from 'express';
import searchRouter from './search';
import proxyRouter from './proxy';
import videoRouter from './video';

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    code: 0,
    msg: 'success',
    data: {},
  });
});

router.use(searchRouter);
router.use(proxyRouter);
router.use(videoRouter);
export default router;
