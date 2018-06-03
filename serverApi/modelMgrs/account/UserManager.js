'use strict';
const AccountManager = require('./AccountManager');
var userObj = require('../../models/account/User');
const moment = require('moment');
const globalFunc = require('../../globalFunctions');

class UserManager extends AccountManager {
    constructor(dbConnect) {
        super(dbConnect, 'user');
        this.dbConnect = dbConnect;
    }

    /**
     * get object user
     * @param {Number} userId 
     * @return {Object} user
     */
    async getAccountById(userId) {
        try {
            var result = await this.dbConnect.Doquery("select * from user where userid = :userId", {"userId" : userId});
            if (result !== null && result.length > 0) {
                return new userObj(result[0]);
            } else return null;
        } catch(err) {
            //console.log(err);
            globalFunc.writeLogFile('getAccountById', __filename, 59, err);
            return null;
        }
    }

    /**
     * add new user
     * @param {Object} user 
     * @return {Number} affectedRows
     */
    async addNewAccount(user) {
        try {
            user.setPassword(globalFunc.encrypt(user.getPassword()));
            let result = null;
            result = await this.dbConnect.ExcuteInsert("insert into user(email, password, fullname, phone, level) " +
                                                            "values(:email, :password, :fullname, :phone, :level)", user);
            return (result !== null) ? {affectedRows: result.affectedRows, userid: result.insertId} : null;
        } catch(err) {
            //console.log(err);
            globalFunc.writeLogFile('addNewAccount', __filename, 139, err);
            return -1;
        }
    }

    /**
     * Update date data user
     * @param {Object} user 
     * @return {Number}
     */
    async updateAccount(user) {
        try {
            user.setLastUpdate(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
            // check password trước khi update
            var result = await this.dbConnect.ExcuteUpdate( `update user set email = :email, fullname = :fullname, phone = :phone
                                                            , level = :level, active = :active, token = :token, lastupdate = :lastUpdate where userid = :userid`, user);
            return result.affectedRows;
        } catch (err) {
            //console.log(err);
            globalFunc.writeLogFile('updateAccount', __filename, 157, err);
            return -1;
        }
    }

    /**
     * Update password user
     * @param {Object} user 
     * @return {Number}
     */
    async updateAccountPassword(user) {
        try {
            user.setPassword(globalFunc.encrypt(user.getPassword()));
            user.setLastUpdate(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
            user.setToken('');
            var result = await this.dbConnect.ExcuteUpdate( `update user set password = :password, token = :token, lastupdate = :lastUpdate where userid = :userid`, user);
            return result.affectedRows;
        } catch (err) {
            //console.log(err);
            globalFunc.writeLogFile('updateAccountPassword', __filename, 174, err);
            return -1;
        }
    }

    /**
     * delete user by id
     * @param {Number} userId 
     */
    async deleteAccountById(userId) {
        try {
            var result = await this.dbConnect.ExcuteDelete('delete from user where userid = :userid', {"userid" : userid});
            return userId;
        } catch (err) {
            //console.log(err);
            globalFunc.writeLogFile('deleteAccountById', __filename, 172, err);
            return -1;
        }
    }
}

module.exports = UserManager;