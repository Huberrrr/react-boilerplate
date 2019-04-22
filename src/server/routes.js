const express = require('express');
const apiControl = require('./api/apiControl');
const router = express.Router();

// api routes

// page routes
if (__filename.includes('server.js')) {
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
} else {
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
}

// static files
router.use('/js', express.static('public'));
router.use('/css', express.static('public'));

module.exports = router;
