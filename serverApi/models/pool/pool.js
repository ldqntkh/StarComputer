'use strict';

class Pool {
    constructor(PoolObject) {
        PoolObject && Object.assign(this, PoolObject);
        /**
         * poolservice : String
         * poolname : String
         * userid : number
         * symbol : String
         * lastUpdate : Date
         */
    }
}
module.exports = Pool;