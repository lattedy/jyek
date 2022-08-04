const router = require('express-promise-router')();
const wedProductController = require('../controllers/wed.controller');

/* GET users listing. */
router.get('/api/get', wedProductController.getWedProduct);

module.exports = router;
