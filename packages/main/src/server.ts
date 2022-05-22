import express from 'express';
import fetch from 'node-fetch';

const app = express();
const router = express.Router();

router.get('/image', async (req, res, next) => {
  const { url } = req.query;
  const realUrl = encodeURIComponent(url as string);

  try {
    const response = await fetch(realUrl, {
      headers: {
        referer: realUrl,
      },
    });
    const buffer = await response.arrayBuffer();
    res.send(buffer);
  } catch (error) {
    next(error);
  }
});

app.use(router);
app.listen(30001);

export {};
