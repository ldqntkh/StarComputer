'use strict';

class Country {
    constructor(CountryObject) {
        CountryObject && Object.assign(this, CountryObject);
        /**
         * id: Number
         * name: String
         * type: String
         * location: String
         */
    }

    /**
     * get id
     * @return {Number} id
     */
    getId() {
        return this.id;
    }

    /**
     * set new id
     * @param {Number} id 
     */
    setId(id) {
        this.id = id;
    }

    /**
     * get name
     * @return {String} name
     */
    getName() {
        return this.name;
    }

    /**
     * set new name
     * @param {String} name 
     */
    setName(name) {
        this.name = name;
    }

    /**
     * get type
     * @return {String} type
     */
    getType() {
        return this.type;
    }

    /**
     * set new type
     * @param {String} type 
     */
    setType(type) {
        this.type = type;
    }

    /**
     * get location
     * @return {String} location
     */
    getLocation() {
        return this.location;
    }

    /**
     * set new location
     * @param {String} location 
     */
    setLocation(location) {
        this.location = location;
    }

}
module.exports = Country;