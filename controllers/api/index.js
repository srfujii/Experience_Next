const router = require('express').Router();
const userRoutes = require('./userRoutes');
const experienceRoutes = require('./experienceRoutes');

router.use('/user', userRoutes);
router.use('/experience', experienceRoutes);

module.exports = router;
