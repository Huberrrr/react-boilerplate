import express from 'express';
import router from './routes';

const app = express();

app.use('/', router);

const port = 5000;
app.listen(process.env.PORT || port, () => {
  // eslint-disable-next-line no-console
  console.log('server is now onine...');
});
