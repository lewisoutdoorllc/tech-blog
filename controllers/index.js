const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboard = require('./dashboard-routes.js');

router.use('/dashboard', dashboard);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;