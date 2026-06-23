const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Rakim Spriggs Portfolio'
  });
});

module.exports = router;