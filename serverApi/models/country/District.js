'use strict';

const Country = require('./Country');

class District extends Country{
    /**
     * province_id: Number
     */

    /**
     * get district province_id
     * @return {Number} province_id
     */
    getProvinceId() {
        return this.province_id;
    }

    /**
     * set new district province_id
     * @param {Number} province_id 
     */
    setProvinceId(province_id) {
        this.province_id = province_id;
    }
}
module.exports = District;