'use strict';
//modules
var express = require('express');
var router = express.Router();
const moment = require('moment');

const ProductManager = require('../../../modelMgrs/product/ProductManager');
const ProductObject = require('../../../models/product/Product');
const globalFunc = require('../../../globalFunctions');
const errorMessageServer = globalFunc.printErrorMessage('There are some problems from server while trying to connect to this api');

/** GET all products
* Error code:  -1: error when server has some problems
*               0: get data of all product success
*               1: can not find any product
*/
router.get(['/', '/all'], async (req, res, next) => {
    try {
        var productMgr = new ProductManager(req.app.locals._db);
        var products = await productMgr.getAllProduct();
        if (products.length > 0) {
            res.send({
                errCode: 0,
                data: products,
                errMessage: null
            });
        } else {
            res.send({
                errCode: 1,
                data: null,
                errMessage: 'Error => cannot find any product'
            });
        }
    } catch(error) {
        globalFunc.writeLogFile('productAPI-> get /all', __filename, 242, error);
        res.send({
            errCode: -1,
            data: null,
            errMessage: errorMessageServer
        });
    }
});

/** POST update or insert data product
* Key value: data
* @return {Object} response
* Error code:  -1: error from server
*               0: insert or update data product success
*               1: error when account is not have permission
*               2: error when trying to insert product url is existed
*               3: error when trying to insert or update data product
*/
router.post(['/handle/product'], async (req, res, next) => {
    try {
        if (!req.session.account_login || !req.session.account_login.isUser) {
            return res.send({
                errCode: 1,
                data: null,
                errMessage: 'You do not have permission to use this function'
            });
        }
        let data = req.body.data ? req.body.data : '';
        let productMgr = new ProductManager(req.app.locals._db);
        let product = (data !== '' && data.product) ? new ProductObject(data.product) : '';
        let productUrl = (product !== '' && product.getUrl()) ? product.getUrl() : '';
        let existedProductUrl = await productMgr.getProductByUrl(productUrl);

        if (existedProductUrl !== null && existedProductUrl.getID() !== product.getID()) {
            return res.send({
                errCode: 2,
                data: null,
                errMessage: 'This product url is already existed. Please try to input another url'
            });
        }
        // set user id to find out the user who update product
        product.setUserId(req.session.account_login.userid);
        let affectedRows = await productMgr.addOrUpdateProduct(product);
        if (affectedRows > 0) {
            res.send({
                errCode: 0,
                data: product,
                errMessage: null
            });
        } else {
            res.send({
                errCode: 3,
                data: null,
                errMessage: 'Can not insert or update data. Please try again'
            });
        }
    } catch(error) {
        globalFunc.writeLogFile('productAPI-> post /handle/product', __filename, 300, error)
        res.send({
            errCode: -1,
            data: null,
            errMessage: errorMessageServer
        });
    }
});

/* GET delete all produt  */
router.get(['/delete/all'], async (req, res, next) => {
    try {
        var productsMgr = new ProductManager(req.app.locals._db);
        if (!req.session.account_login || !req.session.account_login.isUser) {
            return res.send({
                errCode: 1,
                data: null,
                errMessage: 'You do not have permission to use this function'
            });
        }

        if (await productsMgr.deleteAllProduct() > 0) {
            res.send({
                errCode: 0,
                data: null,
                errMessage: null
            });
        } else {
            res.send({
                errCode: 2,
                data: null,
                errMessage: 'Can not delete all product'
            });
        }
    } catch(error) {
        globalFunc.writeLogFile('productAPI-> get /product/delete/all', __filename, 300, error)
        res.send({
            errCode: -1,
            data: null,
            errMessage: errorMessageServer
        });
    }
});

/** GET product by product id
* Error code:  -1: error from server
*               0: get product success
*               1: error when account is not have permission
*               2: error when product id is not have
*               3: error when trying to  get product
 */

router.get(['/:productid', '/:productid/details'], async (req, res, next) => {
    try {
        let productid = req.params.productid ? req.params.productid : '';
        if (productid !== '') {
            let productsMgr = new ProductManager(req.app.locals._db);
            let product = await productsMgr.getProductByID(productid);
            if ( product !== null ) {
                res.send({
                    errCode: 0,
                    data: product,
                    errMessage: null
                });
            } else {
                res.send({
                    errCode: 3,
                    data: null,
                    errMessage: 'Cannot get product by id ' + productid
                });
            }
        } else {
            res.send({
                errCode: 2,
                data: null,
                errMessage: 'Error => please input product id'
            });
        }
    } catch(error) {
        globalFunc.writeLogFile('productAPI-> get /product/get/:productid', __filename, 242, error);
        res.send({
            errCode: -1,
            data: null,
            errMessage: errorMessageServer
        });
    }
});

/** POST delete product by product id
* @param {Number} productid
* @return {Object} response
* Error code:  -1: error from server
*               0: delete product success
*               1: error when account is not have permission
*               2: error when product id is not have
*               3: error when trying to  delete product
*/
router.get(['/:productid/delete'], async (req, res, next) => {
    try {
        if (!req.session.account_login || !req.session.account_login.isUser) {
            return res.send({
                errCode: 1,
                data: null,
                errMessage: 'You do not have permission to use this function'
            });
        }
        let productid = req.params.productid ? req.params.productid : '';
        if (productid !== '') {
            var productsMgr = new ProductManager(req.app.locals._db);
            if (await productsMgr.deleteProductByID(productid) > 0) {
                res.send({
                    errCode: 0,
                    data: null,
                    errMessage: null
                });
            } else {
                res.send({
                    errCode: 3,
                    data: null,
                    errMessage: 'Cannot delete product by id ' + productid
                });
            }
        } else {
            res.send({
                errCode: 2,
                data: null,
                errMessage: 'Please input product id'
            });
        }
    } catch(error) {
        globalFunc.writeLogFile('productAPI-> post /product/delete/:productid', __filename, 300, error)
        res.send({
            errCode: -1,
            data: null,
            errMessage: errorMessageServer
        });
    }
});
module.exports = router;