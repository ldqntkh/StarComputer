const logFile = require('../../globalFunctions');

class CountryManager {

    constructor(dbConnect) {
        this.dbConnect = dbConnect;
    }

    /**
     * get all districts
     * @return {List} list of districts
     */
    async getAllDistricts(id) {
        try {
            let results = [];
            results = await this.dbConnect.Doquery('select * from districts', {});
            return results.length > 0 ? results : null;
        } catch (err) {
            logFile.writeLogFile('getAllDistricts', __filename, 12, err);
            return null;
        }
    }

    /**
     * get all provinces
     * @return {List} list of provinces
     */
    async getAllProvinces() {
        try {
            let results = [];
            results = await this.dbConnect.Doquery('select * from provinces', {});
            return results.length > 0 ? results : null;
        } catch (err) {
            logFile.writeLogFile('getAllProvinces', __filename, 22, err);
            return null;
        }
    }

    /**
     * get all wards
     * @return {List} list of wards
     */
    async getAllWards() {
        try {
            let results = [];
            results = await this.dbConnect.Doquery('select * from wards', {});
            return results.length > 0 ? results : null;
        } catch (err) {
            logFile.writeLogFile('getAllWards', __filename, 32, err);
            return null;
        }
    }
}

module.exports = CountryManager;