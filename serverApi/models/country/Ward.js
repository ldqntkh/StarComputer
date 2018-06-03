'use strict';

const Country = require('./Country');

class Ward extends Country {
    /**
     * district_id: Number
     */

    /**
     * get district_id
     * @return {Number} district_id
     */
    getDistrictId() {
        return this.district_id;
    }

    /**
     * set new district_id
     * @param {Number} district_id 
     */
    setDistrictId(district_id) {
        this.district_id = district_id;
    }

}
module.exports = Ward;