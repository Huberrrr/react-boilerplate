const express = require('express');
const path = require('path');

const router = express.Router();

// static files
router.use('/js', express.static('public'));
router.use('/css', express.static('public'));

// page routes
if (__filename.includes('server.js')) {
  router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
} else {
  router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
}

module.exports = router;
