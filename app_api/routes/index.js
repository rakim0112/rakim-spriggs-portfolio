const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  res.json({
    name: 'Rakim Spriggs',
    title: 'Computer Science Student | Full Stack Developer | Music Producer',
    github: 'https://github.com/rakim0112',
    email: 'rakimspriggs@gmail.com',
    skills: [
      'JavaScript',
      'Node.js',
      'Express',
      'Angular',
      'MongoDB',
      'HTML',
      'CSS',
      'C++',
      'OpenGL',
      'Git'
    ]
  });
});

module.exports = router;