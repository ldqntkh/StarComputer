const globalFunc = require('../../globalFunctions');
const customerObj = require('../../models/account/Customer');
const AccountManager = require('./AccountManager');

// module
const moment = require('moment');

class CustomerManager extends AccountManager {
    constructor(dbConnect) {
        super(dbConnect, 'customer');
        this.dbConnect = dbConnect;
    }

    /**
     * get object customer
     * @param {Number} customerId 
     * @return {Object} user
     */
    async getAccountById(customerId) {
        try {
            var result = await this.dbConnect.Doquery("select * from customer where customerid = :customerId", {"customerId" : customerId});
            if (result !== null && result.length > 0) {
                return new customerObj(result[0]);
            } else return null;
        } catch(err) {
            //console.log(err);
            globalFunc.writeLogFile('getAccountById', __filename, 59, err);
            return null;
        }
    }

    /**
     * get object customer
     * @param {Number} customerId 
     * @return {Object} user
     */
    async getAccountByEmailAndLoginType(email, logintype) {
        try {
            var result = await this.dbConnect.Doquery("select * from customer where email = :email and logintype = :logintype",
                                                        {"email" : email, "logintype": logintype});
            return (result !== null && result.length > 0) ? new customerObj(result[0]) : null;
        } catch(err) {
            //console.log(err);
            globalFunc.writeLogFile('getAccountById', __filename, 59, err);
            return null;
        }
    }

    /**
     * add new customer object
     * @param {Object} customer 
     * @return {Number} affectedRows
     */
    async addNewAccount(customer) {
        try {
            customer.setPassword(globalFunc.encrypt(customer.getPassword()));
            let result = null;
            result = await this.dbConnect.ExcuteInsert("insert into customer(email, password, phone, fullname, avatar, wardsid, provinceid, district, address, points, points_used, logintype) " +
                                                            "values(:email, :password, :phone, :fullname, :avatar, :wardsid, :provinceid, :district, :address, :points, :points_used, :logintype)", customer);
            return (result !== null) ? {affectedRows: result.affectedRows, customerid: result.insertId} : null;
        } catch(err) {
            //console.log(err);
            globalFunc.writeLogFile('addNewAccount', __filename, 42, err);
            return -1;
        }
    }

    /**
     * Update date data customer
     * @param {Object} customer 
     * @return {Number}
     */
    async updateAccount(customer) {
        try {
            customer.setLastUpdate(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
            // check password trước khi update
            var result = await this.dbConnect.ExcuteUpdate( 'update customer set email = :email, fullname = :fullname, phone = :phone, avatar = :avatar, wardsid = :wardsid, provinceid = :provinceid, district = :district, address = :address, points = :points, points_used = :points_used, lastupdate = :lastUpdate where customerid = :customerid', customer);
            return result.affectedRows;
        } catch (err) {
            //console.log(err);
            globalFunc.writeLogFile('updateAccount', __filename, 61, err);
            return -1;
        }
    }

    /**
     * Update password customer
     * @param {Object} customer 
     * @return {Number}
     */
    async updateAccountPassword(customer) {
        try {
            customer.setPassword(globalFunc.encrypt(customer.getPassword()));
            customer.setLastUpdate(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
            customer.setToken('');
            var result = await this.dbConnect.ExcuteUpdate( `update customer set password = :password, token = :token, lastUpdate = :lastUpdate where customerid = :customerid`, customer);
            return result.affectedRows;
        } catch (err) {
            //console.log(err);
            globalFunc.writeLogFile('updateAccountPassword', __filename, 174, err);
            return -1;
        }
    }

    /**
     * delete customer by id
     * @param {Number} customerid 
     */
    async deleteAccountById(customerid) {
        try {
            var result = await this.dbConnect.ExcuteDelete('delete from customer where customerid = :customerid', {"customerid" : userid});
            return customerid;
        } catch (err) {
            //console.log(err);
            globalFunc.writeLogFile('deleteAccountById', __filename, 172, err);
            return -1;
        }
    }
}
module.exports = CustomerManager;