'use strict';

var accountpage = {

    showFormAccount: function(isLogin = false) {
        if (isLogin) {
            $('#customer_login').show();
            $('#customer_register').hide();
        } else {
            $('#customer_login').hide();
            $('#customer_register').show();
        }
    },

    init: function() {
        var that = this;
        $('#customer_register').hide();
        $('body').on('click', '#btn-register-account', function() {
            that.showFormAccount();
        });

        $('body').on('click', '#btn-login-account', function() {
            that.showFormAccount(true);
        });
    }
}

module.exports = accountpage;