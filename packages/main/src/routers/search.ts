import express from 'express';
import searchLogic from '/@/logic/bilibili/search';

const router = express.Router();

router.get('/search', async (req, res) => {
  try {
    const result = await searchLogic.search(req.query as { keyword: string});
    res.json(result);
  } catch (error) {
    res.json({
      code: 50001,
      msg: 'Interval server error',
    });
  }
});

export default router;
