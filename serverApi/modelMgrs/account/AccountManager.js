'use strict';
var userObj = require('../../models/account/User');
var customerObj = require('../../models/account/Customer');
const moment = require('moment');
const globalFunc = require('../../globalFunctions');

class AccountManager {
    constructor(dbConnect, tableName) {
        this.dbConnect = dbConnect;
        this.tableName = tableName
    }

    /**
     * get all account
     * @return {List}
     */
    async getAllAccount() {
        try {
            var result = await this.dbConnect.Doquery("select * from " + this.tableName , {});
            if (result !== null && result.length > 0) {
                return result;
            } else return null;
        } catch(err) {
            //console.log(err);
            globalFunc.writeLogFile('getAllAccount', __filename, 41, err);
            return null;
        }
    }


    /**
     * get account by email
     * @param {String} email 
     * @return {Object} account 
     */
    async getAccountByEmail(email) {
        try {
            var result = await this.dbConnect.Doquery("select * from " + this.tableName + " where email = :email",
                                                        {"email" : email});
            if (result !== null && result.length > 0) {
                return this.convertObject(result[0]);
            } else return null;
        } catch(err) {
            //console.log(err);
            globalFunc.writeLogFile('getAccountByEmail', __filename, 79, err);
            return null;
        }
    }

     /**
     * get acccount by token
     * @param {String} token 
     * @param {String} email
     * @return {Number} affectedRows 
     */
    async getAccountByEmailAndToken(token, email) {
        try {
            var result = await this.dbConnect.Doquery("select * from " + this.tableName + " where email = :email and token = :token",
                                                        {"token" : token, "email": email});
            if (result !== null && result.length > 0) {
                return this.convertObject(result[0]);
            } else return null;
        } catch(err) {
            //console.log(err);
            globalFunc.writeLogFile('getUserByToken', __filename, 109, err);
            return null;
        }
    }

    /**
     * get account by phone
     * @param {String} phone 
     * @return {Object} account 
     */
    async getAccountByPhone(phone) {
        try {
            var result = await this.dbConnect.Doquery("select * from " + this.tableName + " where phone = :phone",
                                                        {"phone" : phone});
            if (result !== null && result.length > 0) {
                return this.convertObject(result[0]);
            } else return null;
        } catch(err) {
            //console.log(err);
            globalFunc.writeLogFile('getAccountByPhone', __filename, 99, err);
            return null;
        }
    }

    /**
     * get object account by email and password
     * @param {String} email
     * @param {String} password 
     * @return {Object} user
     */
    async getAccountByEmailAndPassword(email, password) {
        try {
            var result = await this.dbConnect.Doquery("select * from " + this.tableName + " where email = :email", {"email" : email});
            if (result !== null && result.length > 0) {
                var account = this.convertObject(result[0])
                if (globalFunc.encrypt(password) == account.getPassword())
                    return account;
                else return null
            } else return null;
        } catch(err) {
            //console.log(err);
            globalFunc.writeLogFile('getAccountByEmailAndPassword', __filename, 121, err);
            return null;
        }
    }


    /**
     * delete account by email
     * @param {String} email 
     */
    async deleteAccountByEmail(email) {
        try {
            var result = await this.dbConnect.ExcuteDelete('delete from ' + this.tableName + ' where email = :email', {"email" : email});
            return result.affectedRows;
        } catch (err) {
            //console.log(err);
            globalFunc.writeLogFile('deleteAccountByEmail', __filename, 187, err);
            return -1;
        }
    }

    /**
     * delete account by phone
     * @param {String} phone 
     */
    async deleteAccountByPhone(phone) {
        try {
            var result = await this.dbConnect.ExcuteDelete('delete from ' + this.tableName + ' where phone = :phone', {"phone" : phone});
            return result.affectedRows;
        } catch (err) {
            //console.log(err);
            globalFunc.writeLogFile('deleteAccountByPhone', __filename, 202, err);
            return -1;
        }
    }

    /**
     * get object account
     * @param {Number} accountId 
     * @return {Object} account
     */
    async getAccountById(account) {
        return -1;
    }

    /**
     * add new account
     * @param {Object} account 
     * @return {Number} affectedRows
     */
    async addNewAccount(account) {
        return -1;
    }

    /**
     * Update date data account
     * @param {Object} account 
     * @return {Number}
     */
    async updateAccount(account) {
        return -1
    }

    /**
     * Update password account
     * @param {Object} account 
     * @return {Number}
     */
    async updateAccountPassword(account) {
        return -1;
    }

    /**
     * delete account by id
     * @param {Number} id 
     */
    async deleteAccountById(id) {
        return id
    }

    convertObject(object) {
        if(this.tableName === 'user')
            return new userObj(object);
        else return new customerObj(object);
    }
}

module.exports = AccountManager;