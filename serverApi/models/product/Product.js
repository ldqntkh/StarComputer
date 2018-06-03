'use strict';

class Product {
    constructor(ProductObject) {
        ProductObject && Object.assign(this, ProductObject);
        /**
         * id: Number
         * name: String
         * price: Number
         * imageurl: String
         * url: String
         * userid: Number
         * lastupdate: Date
        */
    }

    /**
     * get product id
     * @return {Number} id
    */
    getID() {
        return this.id;
    }

    /**
     * set product id
     * @param {Number} id
    */
    setID(id) {
        this.id = id;
    }

    /**
     * get product name
     * @return {String} name
    */
    getName() {
        return this.name;
    }

    /**
     * set product name
     * @param {String} name
     */
    setName(name) {
        this.name = name;
    }

    /**
     * get product price
     * @return {Number} prie
     */
    getPrice() {
        return this.price;
    }

    /**
     * set product price
     * @param {Number} price
     */
    setPrice(price) {
        this.price = price;
    }

    /**
     * get product image url
     * @return {String} imageurl
     */
    getImageUrl() {
        return this.imageurl;
    }

    /**
     * set product image url
     * @param {String} imageurl
     */
    setImageUrl(imageurl) {
        this.imageurl = imageurl;
    }

    /**
     * get product url
     * @return {String} url
     */
    getUrl() {
        return this.url;
    }

    /**
     * set product url
     * @param {String} url
     */
    setUrl(url) {
        return this.url = url;
    }

    /**
     * get user id that update product
     * @return {Number} userid
     */
    getUserId() {
        return this.userid;
    }

    /**
     * set user id that update product
     * @param {Number} userid
     */
    setUserId(userid) {
        return this.userid = userid;
    }

    /**
     * get last update
     * @return {Date} lastupdate
     */
    getLastUpdate() {
        return this.lastupdate;
    }

    /**
     * set last update
     * @param {Date} lastupdate
     */
    setLastUpdate(lastupdate) {
        return this.lastupdate = lastupdate;
    }
}

module.exports = Product;