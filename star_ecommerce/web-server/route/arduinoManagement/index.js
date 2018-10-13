var express = require('express');
var router = express.Router();

/* GET page show list arduino connected. */
router.get('/', async (req, res, next) => {
    res.render('arduinoManagement/index');
});

module.exports = router;
