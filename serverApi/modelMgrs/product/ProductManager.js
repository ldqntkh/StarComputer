'use strict';

const productObject = require('../../models/product/Product');
const logFile = require('../../globalFunctions');

// modules
const moment = require('moment');

class ProductManager {
    constructor(dbConnect) {
        this.dbConnect = dbConnect;
    }

    /**
     * get all product
     * @return {Array} products
     */
    async getAllProduct() {
        try {
            let products = [];
            products = await this.dbConnect.Doquery('select * from product', {});
            if (products != null && products.length > 0) {
                return products;
            }
            return products;
        } catch(error) {
            logFile.writeLogFile('getAllProduct', __filename, 23, error);
            return null;
        }
    }

    /**
     * get product by id
     * @param {Number} id
     * @return {Object} product
     */
    async getProductByID(id) {
        try {
            let product = [];
            product =  await this.dbConnect.Doquery('select * from product where id = :id', {'id': id});
            return (product.length > 0) ? new productObject(product[0]) : null;
        } catch(error) {
            logFile.writeLogFile('getProductByID', __filename, 33, error);
            return null;
        }
    }

    /**
     * get product by url
     * @param {String} url
     * @return {Object} product
     */
    async getProductByUrl(url) {
        try {
            let product = await this.dbConnect.Doquery('select * from product where url = :url', {'url': url});
            return (product != null && product.length > 0) ? new productObject(product[0]) : null;
        } catch(error) {
            logFile.writeLogFile('getProductByUrl', __filename, 43, error);
            return null;
        }
    }

    /**
     * add new or update product
     * @param {Object} product
     * @return {Number} affectedRows
     */
    async addOrUpdateProduct(product) {
        try {
            product.setLastUpdate(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
            let productID = product.getID();
            let existedProduct = productID !== '' ? await this.getProductByID(productID) : '';
            let affectedRows = -1;
            let result = '';

            if (existedProduct !== null) {
                // update product
                result = await this.dbConnect.ExcuteUpdate(`update product set name = :name, price = :price, imageurl = :imageurl,
                                                            url = :url, userid = :userid, lastupdate = :lastupdate where id = :id`, product);
            } else {
                // insert product
                result = await this.dbConnect.ExcuteInsert(`insert into product (name, price, imageurl, url, userid, lastupdate) 
                                                            values(:name, :price, :imageurl, :url, :userid, :lastupdate)`, product);
            }
            return (result != '' && result.affectedRows) ? result.affectedRows : affectedRows;
        } catch(error) {
            logFile.writeLogFile('addProduct', __filename, 53, error);
            return null;
        }
    }

    /**
     * delete all product
     * @return {Number} afftectedRows
     */
    async deleteAllProduct() {
        try {
            let result = await this.dbConnect.ExcuteDelete('delete from product', {});
            return (result && result.affectedRows) ? result.affectedRows : -1;
        } catch(error) {
            logFile.writeLogFile('deleteAllProduct', __filename, 53, error);
            return null;
        }
    }

    /**
     * delete product by id
     * @return {Number} affectedRows
     */
    async deleteProductByID(productId) {
        try {
            let affectedRows = -1;
            if (productId != '') {
                let result = await this.dbConnect.ExcuteDelete('delete from product where id = :productId', {'productId': productId});
                return (result && result.affectedRows) ? result.affectedRows : affectedRows;
            }
            return affectedRows;
        } catch(error) {
            logFile.writeLogFile('deleteProductByID', __filename, 63, error);
            return null;
        }
    }
}
module.exports = ProductManager;