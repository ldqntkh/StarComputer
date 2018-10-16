'use strict';

const ArduinoModel = require('../modelClass/ArduinoModel');
const ArduinoTable = require('../TableDefine').ArduinoTable;

module.exports = {

    getAllArduinoObject: async ()=> {
        try {
            let arduinos = await ArduinoTable.findAll();
            if (arduinos.length > 0) {
                let results = [];
                for(let index in arduinos) {
                    results.push(arduinos[index].dataValues);
                }
                return results;
            }
            return null;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    getArduinoObjectByNum: async (arduino_num)=> {
        try {
            var arduino = await ArduinoTable.findOne({
                where : {
                    "arduino_num" : arduino_num
                }
            });
            return arduino && arduino.dataValues !== null ? new ArduinoModel(arduino.dataValues) : null;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    addNewArduino: async (arduinoObject) => {
        try {
            let arduino = await ArduinoTable.create(arduinoObject);
            return arduino && arduino.dataValues !== null ? new ArduinoModel(arduino.dataValues) : null;
        } catch (err) {
            console.log(err);
            return null;
        }
    },

    updateArduinoProductId: async (arduinoObject) => {
        try {
            let rs = await ArduinoTable.update(arduinoObject, {
                where: {
                    arduino_num: arduinoObject.arduino_num
                }
            });
            return rs && rs.dataValues !== null ? true : false;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
}