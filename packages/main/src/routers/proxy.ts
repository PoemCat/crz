import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.get('/image', async (req, res) => {
  const { url } = req.query;
  const realUrl = decodeURIComponent(url as string);
  const response = await fetch(realUrl);
  if (!response.body) return res.send(0);
  for await (const chunk of response.body) {
    res.write(chunk);
  }
  res.end();
});

router.get('/video', async (req, res) => {
  const { url } = req.query;
  const headers = req.headers;
  console.log(headers);
  const response = await fetch(url as string, {
    headers: {
      range: headers.range || '',
      referer: 'https://www.bilibili.com',
    },
  });
  if (!response.body) return res.send(0);
  for (const [key, val] of response.headers.entries()) {
    console.log(key);
    if (key !== 'access-control-allow-origin') res.header(key, val);
  }
  for await (const chunk of response.body) {
    res.write(chunk);
  }
  res.end();

});

export default router;
