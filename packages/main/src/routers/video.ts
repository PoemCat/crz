import express from 'express';
import * as videoLogic from '/@/logic/bilibili/video';

const router = express.Router();

router.get('/video-info', async (req, res) => {
  try {
    const result = await videoLogic.getAllQuantityUrl(req.query.bvid as string);
    res.json(result);
  } catch (error) {
    res.json({
      code: 50001,
      msg: 'Interval server error',
    });
  }
});

export default router;
