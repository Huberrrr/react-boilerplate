const express = require('express');
const router = require('./routes');

const app = express();

app.use('/', router);

const port = 5000;
app.listen(process.env.PORT || port, () => {
  // eslint-disable-next-line no-console
  console.log(`
    \n
    -----------------------------
    now serving at localhost:${process.env.PORT || port}
    -----------------------------
    \n
  `);
});
