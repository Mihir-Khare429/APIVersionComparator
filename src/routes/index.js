const { CompareResponse } = require('../controllers/compare');

const router = require('express').Router();

router.post('/compareResponse', CompareResponse);

module.exports = router;
