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
                    results.push(arduinos[index]);
                }
                return results;
            }
            return null;
        } catch (err) {
            console.log(arduino);
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
    }
}