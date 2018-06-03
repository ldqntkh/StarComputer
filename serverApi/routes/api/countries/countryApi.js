var express = require('express');
var router = express.Router();

const globalFunc = require('../../../globalFunctions');
const CountryManager = require('../../../modelMgrs/country/CountryManager');

/**
 * API get all districts
 */
router.get(['/districts/all'], async(req, res, next) => {
    try {
        let countryMgr = new CountryManager(req.app.locals._db);
        let districts = await countryMgr.getAllDistricts();
        if (districts !== null) {
            res.send({
                errCode: 0,
                data: districts,
                errMessage: null
            });
        } else {
            res.send({
                errCode: 1,
                data: null,
                errMessage: 'Can not get data of districts'
            });
        }
    } catch(error) {
        globalFunc.writeLogFile('countryAPI-> get all districts', __filename, 12, error);
        res.send({
            errCode: -1,
            data: null,
            errMessage: 'The error message while get all districts: ' + error.message
        });
    }
});

/**
 * API get all provinces
 */
router.get(['/provinces/all'], async(req, res, next) => {
    try {
        let countryMgr = new CountryManager(req.app.locals._db);
        let provinces = await countryMgr.getAllProvinces();
        if (provinces !== null) {
            res.send({
                errCode: 0,
                data: provinces,
                errMessage: null
            });
        } else {
            res.send({
                errCode: 1,
                data: null,
                errMessage: 'Can not get data of provinces'
            });
        }
    } catch(error) {
        globalFunc.writeLogFile('countryAPI-> get all provinces', __filename, 32, error);
        res.send({
            errCode: -1,
            data: null,
            errMessage: 'The error message while get all provinces: ' + error.message
        });
    }
});

/**
 * API get all wards
 */
router.get(['/wards/all'], async(req, res, next) => {
    try {
        let countryMgr = new CountryManager(req.app.locals._db);
        let wards = await countryMgr.getAllWards();
        if (wards !== null) {
            res.send({
                errCode: 0,
                data: wards,
                errMessage: null
            });
        } else {
            res.send({
                errCode: 1,
                data: null,
                errMessage: 'Can not get data of wards'
            });
        }
    } catch(error) {
        globalFunc.writeLogFile('countryAPI-> get all wards', __filename, 42, error);
        res.send({
            errCode: -1,
            data: null,
            errMessage: 'The error message while get all wards: ' + error.message
        });
    }
});

module.exports = router;