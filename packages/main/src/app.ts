import express from 'express';
import router from './routers';
const app = express();
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requestd-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(router);

app.listen(30001);
