'use strict';

class Customer {
    constructor(CustomerObject) {
        CustomerObject && Object.assign(this, CustomerObject);
        /**
         * customerid : int
         * email : String
         * password : string encode
         * phone : string
         * fullname : string
         * avatar : string
         * wardsid: ???
         * provinceid: ??
         * district: ??
         * address : string
         * points : int
         * points_used : int
         * token: string
         * logintype: string
         * lastUpdate : datetime
         */
    }

    /**
     * get customer id
     * @return {Number} customerid
     */
    getAccountId() {
        return this.customerid;
    }

    /**
     * set new customerid
     * @param {Number} customerid 
     */
    setCustomerId(customerid) {
        this.customerid = customerid;
    }

    /**
     * get customer email
     * @return {String} email
     */
    getCustomerEmail() {
        return this.email;
    }

    /**
     * set new customer email
     * @param {String} email 
     */
    setCustomerEmail(email) {
        this.email = email;
    }

    /**
     * get customer password
     * @return {String} password
     */
    getPassword() {
        return this.password;
    }

    /**
     * set new customer password
     * @param {String} password 
     */
    setPassword(password) {
        this.password = password
    }

    /**
     * get customer phone
     * @return {String} phone
     */
    getCustomerPhone() {
        return this.phone;
    }

    /**
     * set new customer phone
     * @param {String} phone 
     */
    setCustomerPhone(phone) {
        this.phone = phone;
    }

    /**
     * get customer fullname
     * @return {String}
     */
    getCustomerFullname() {
        return this.fullname;
    }

    /**
     * set new customer fullname
     * @param {String} fullname 
     */
    setCustomerFullname(fullname) {
        this.fullname = fullname;
    }

    /**
     * get customer avartar
     * @return {String}
     */
    getCustomerAvatar() {
        return this.avatar;
    }

    /**
     * set new customer avatar
     * @param {String} avartar 
     */
    setCustomerAvatar(avatar) {
        this.avatar = avatar;
    }

    /**
     * get customer wardsid
     * @return {String}
     */
    getCustomerWardsId() {
        return this.wardsid;
    }

    /**
     * set new customer wardsid
     * @param {String} wardsid 
     */
    setCustomerWardsId(wardsid) {
        this.wardsid = wardsid;
    }

    /**
     * get customer provinceid
     * @return {String}
     */
    getCustomerProvinceId() {
        return this.provinceid;
    }

    /**
     * set new customer provinceid
     * @param {String} provinceid 
     */
    setCustomerProvinceid(provinceid) {
        this.provinceid = provinceid;
    }

    /**
     * get customer district
     * @return {String}
     */
    getCustomerDistrict() {
        return this.district;
    }

    /**
     * set new customer district
     * @param {String} district 
     */
    setCustomerDistrict(district) {
        this.district = district;
    }

    /**
     * get customer address
     * @return {String}
     */
    getCustomerAddress() {
        return this.address;
    }

    /**
     * set new customer address
     * @param {String} address 
     */
    setCustomerAddress(address) {
        this.address = address;
    }

    /**
     * get customer points
     * @return {Number}
     */
    getCustomerPoints() {
        return this.points;
    }

    /**
     * set new customer points
     * @param {Number} points 
     */
    setCustomerPoints(points) {
        this.points = points;
    }

    /**
     * get customer points_used
     * @return {Number}
     */
    getCustomerpointsUsed() {
        return this.points_used;
    }

    /**
     * set new customer points
     * @param {Number} address 
     */
    setCustomerPointsUsed(points_used) {
        this.points_used = points_used;
    }

    /**
     * get token update
     * @return {String}
     */
    getToken() {
        return this.token;
    }

    /**
     * set new token update
     * @param {String} token 
     */
    setToken(token) {
        this.token = token;
    }

    /**
     * get login type
     * @return {String} logintype
     */
    getLoginType() {
        return this.logintype;
    }

    /**
     * set new logintype
     * @param {String} logintype 
     */
    setLoginType(logintype) {
        this.logintype = logintype;
    }

    /**
     * get last time update
     * @return {DateTime}
     */
    getLastUpdate() {
        return this.lastUpdate;
    }

    /**
     * set new last time update
     * @param {DateTime} lastUpdate 
     */
    setLastUpdate(lastUpdate) {
        this.lastUpdate = lastUpdate;
    }
}
module.exports = Customer;