const router = require('express').Router();
const user = require('./userRoutes');
const post = require('./postRoutes');
const comment = require('./commentRoutes');

router.use('/users', user);
router.use('/post', post);
router.use('/comment', comment);

module.exports = router;