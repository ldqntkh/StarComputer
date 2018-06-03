var express = require('express');
var router = express.Router();

var CustomerManager = require('../../../modelMgrs/account/CustomerManager');
var CustomerObject = require('../../../models/account/Customer');
var EmailObject = require('../../../configs/EmailObject');
const globalFunc = require('../../../globalFunctions');

/* POST login account */
router.post(['/login'], async (req, res, next) => {
    // data key: data
    try {
        let data = req.body.data;
        let {email, password, logintype} = data;
        let customerMgr = new CustomerManager(req.app.locals._db);
        let customerObj = await customerMgr.getAccountByEmail(email);
        
        if (customerObj) {
            if (logintype && logintype !== '') {
                let customerSocial = await customerMgr.getAccountByEmailAndLoginType(email, logintype);
                if (customerSocial !== null) {
                    email = customerSocial.getCustomerEmail();
                    password = globalFunc.decrypt(customerSocial.getPassword());
                }
            }

            customerObj = await customerMgr.getAccountByEmailAndPassword(email, password);
            if (customerObj) {
                res.send({
                    errCode: 0,
                    data : customerObj,
                    errMessage: null
                });
            } else {
                res.send({
                    errCode: 2,//err pass
                    data: null,
                    errMessage: 'incorrect password'
                });
            }
        } else {
            res.send({
                errCode: 1, // err email
                data: null,
                errMessage: 'email not found'
            });
        }
    } catch (err) {
        //console.log(err.message);
        globalFunc.writeLogFile('accountAPI-> post login: ', __filename, 41, err.message);
        res.send({
            errCode: 3, // server error
            data: null,
            errMessage: 'server error'
        });
    }
});

/**
* @function register account using method POST
* @param {Object} user
* @return {Object} response
* @Error code: 0 (return not error)
*              1 (return error while trying to insert new user)
*              2 (return error when email is already existed)
*              3 (return error when phone number is already existed)
*             -1 (return error when server has some issues)
*/

router.post(['/register'], async (req, res) => {
    // data key: user
    try {
        let customerMgr = new CustomerManager(req.app.locals._db);
        let customer = req.body.customer;
        let existedEmail = await customerMgr.getAccountByEmail(customer.email);
        let existedPhone = await customerMgr.getAccountByPhone(customer.phone);
        if (existedPhone) {
            res.send({
                errCode: 3,
                data : null,
                errMessage: 'the phone number ' + customer.phone + ' is already existed'
            });
        } else if (existedEmail) {
            res.send({
                errCode: 2,
                data : null,
                errMessage: 'the email ' + customer.email + ' is already existed'
            });
        } else {
            let customerObj = new CustomerObject(customer);
            let result = await customerMgr.addNewAccount(customerObj);
            if (result !== null && result.affectedRows > 0) {
                customerObj.setCustomerId(result.customerid);
                res.send({
                    errCode: 0,
                    data: customerObj,
                    successMessage: 'The account is registered successfully'
                });
            } else {
                res.send({
                    errCode: 1,
                    data: null,
                    errMessage: 'Can not register account with ' + customer.email
                });
            }
        }
    } catch(error) {
        //console.log(error.message);
        globalFunc.writeLogFile('accountAPI-> post register', __filename, 99, error);
        res.send({
            errCode: -1,
            data: null,
            errMessage: "the error message while registering account is: " + error.message
        });
    }
});

/**

 * @function change-password
 * @param {Object} // data: {token, password, newpassword}
 * @returns {number}
 * 0 - not error
 * 1 - request data is not valid
 * 2 - incorrect password
 * 3 - server error
 * 4 - Cannot update password
 */
router.post(['/customer/change-password'], async (req, res, next) => {
    // data key: data
    try {
        let data = req.body.data;
        
        if (data == undefined || data.token == undefined || data.password == undefined || data.newpassword == undefined) {
            res.send({
                errCode: 1,
                data: null,
                errMessage: 'The request data is not valid'
            });
            return;
        }
        //decrypt the token
        let {token, password, newpassword} = data;
        let decryptToken = typeof token == 'string' ? JSON.parse(globalFunc.decrypt(token)) : {};
        let customerMgr = new CustomerManager(req.app.locals._db);
        
        let customerObj = await customerMgr.getAccountByEmailAndPassword(decryptToken.email, password);
        if (customerObj) {
            customerObj.setPassword(newpassword);
            let affectedRows = await customerMgr.updateAccountPassword(customerObj);
            if (affectedRows > 0) {
                res.send({
                    errCode: 0,
                    data : customerObj,
                    errMessage: null
                });
            } else {
                res.send({
                    errCode: 4,
                    data : null,
                    errMessage: 'Error => Cannot update password!'
                });
            }
        } else {
            res.send({
                errCode: 2,//err pass
                data: null,
                errMessage: 'incorrect password'
            });
        }
    } catch (err) {
        //console.log(err.message);
        globalFunc.writeLogFile('accountAPI-> post change-password: ', __filename, 161, err.message);
        res.send({
            errCode: 3, // server error
            data: null,
            errMessage: 'server error'
        });
    }
});

router.post(['/customer/update-mydetails'], async (req, res, next) => {
    // // data key: data
    try {
        let data = req.body.data;
        if (data == undefined || data.token == undefined) {
            res.send({
                errCode: 1,
                data: null,
                errMessage: 'The request data is not valid'
            });
            return;
        }
        let {token, email, phone, fullname, provinceid, address} = data;
        let decryptToken = typeof token == 'string' && token !== '' ? JSON.parse(globalFunc.decrypt(token)) : {};
        let customerMgr = new CustomerManager(req.app.locals._db);
        let customerid = decryptToken.customerid ? decryptToken.customerid : '';
        let customerObj = await customerMgr.getAccountById(decryptToken.customerid);
      
        if (customerObj) {
            customerObj.setCustomerEmail(email);
            customerObj.setCustomerFullname(fullname);
            customerObj.setCustomerPhone(phone);
            customerObj.setCustomerProvinceid(provinceid);
            customerObj.setCustomerAddress(address);
            let affectedRows = await customerMgr.updateAccount(customerObj);
            if (affectedRows > 0) {
                res.send({
                    errCode: 0,
                    data : customerObj,
                    errMessage: null
                });
            } else {
                res.send({
                    errCode: 4,
                    data : null,
                    errMessage: 'Error => Cannot update account details!'
                });
            }
        } else {
            res.send({
                errCode: 2,//err pass
                data: null,
                errMessage: 'Error => Cannot find your account'
            });
        }
    } catch (err) {
        //console.log(err.message);
        globalFunc.writeLogFile('accountAPI-> post update my account: ', __filename, 226, err.message);
        res.send({
            errCode: 3, // server error
            data: null,
            errMessage: 'server error'
        });
    }
});
/*
* @function register account using method POST
* @param {Object} user
* @return {Object} response
* @Error code: 0 (return not error)
*              1 (return error when email account is not existed)
*              2 (return error when email is not sent successfully)
*              3 (return error while trying to update new password)
*              4 (return error when not input new password)
*              5 (return error when not find user token)
*              6 (return error while trying to update user token)
*             -1 (return error when server has some issues)
*/

router.post(['/customer/resetpassword'], async (req, res) => {
    try {
        let data = req.body.data ? req.body.data : '';
        if (data != '') {
            let email = data.email ? data.email : '';
            let tokenClient = data.token ? data.token : '';
            let customerMgr = new CustomerManager(req.app.locals._db);
            let existedCustomer = await customerMgr.getAccountByEmail(email);
            if (existedCustomer == null) {
                return res.send({
                    errCode: 1,
                    data: null,
                    errMessage: 'Can not find your email account. Please try again'
                });
            }
            let customerObj = new CustomerObject(existedCustomer);
            if (tokenClient == '') {
                let randomNumber = Math.floor(Math.random() * 899999 + 100000);
                let tokenServer = globalFunc.encrypt(randomNumber.toString());
                customerObj.setToken(tokenServer);
                if (await customerMgr.updateAccount(customerObj) > 0) {
                    let emailObject = new EmailObject();
                    let mailOptions = {
                        from: '<phat.le@isobar.com>', // sender address
                        to: email, // list of receivers
                        subject: '[Mybitbox] Reset password', // Subject line
                        html: '<b>Hello! Your token is: ' + tokenServer + '</b>' // html body
                    }

                    if (emailObject.sendEmail(mailOptions) != '') {
                        res.send({
                            errCode: 0,
                            data: existedUser,
                            successMessage: 'Email is sent successfully'
                        });
                    } else {
                        res.send({
                            errCode: 2,
                            data: null,
                            errMessage: 'Email is not sent successfully'
                        });
                    }
                }
            } else {
                //if client send token to server, it will be step send email
                if (await customerMgr.getAccountByEmailAndToken(tokenClient, email) != null) {
                    let newpassword = data.newpassword ? data.newpassword : '';
                    if (newpassword == '') {
                        return res.send({
                            errCode: 4,
                            data: null,
                            errMessage: 'Please input new password'
                        });
                    }
                    // update user password
                    customerObj.setPassword(data.newpassword);
                    if (await customerMgr.updateAccountPassword(customerObj) > 0) {
                        res.send({
                            errCode: 0,
                            data: customerObj,
                            errMessage: null
                        });
                    } else {
                        res.send({
                            errCode: 3,
                            data: null,
                            errMessage: 'Can not reset your password. Please try again'
                        });
                    }
                } else {
                    res.send({
                        errCode: 5,
                        data: null,
                        errMessage: 'Can not find your token. Please try again'
                    })
                }
            }
        }
    } catch(error) {
        globalFunc.writeLogFile('accountAPI-> reset password', __filename, 99, error);
        res.send({
            errCode: -1,
            data: null,
            errMessage: "the error message while reset user password: " + error.message
        });
    }
});
module.exports = router;
