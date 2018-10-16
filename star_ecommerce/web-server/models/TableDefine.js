const SequelizeConfig = require('./SequelizeConfig');

const Sequelize = SequelizeConfig.getSequelizeModule();

const sequelize = SequelizeConfig.init();

/**
 * table historyofcustomer
 */
module.exports.ArduinoTable = sequelize.define('arduino_management', {
    arduino_num: {
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    product_id: Sequelize.STRING
});