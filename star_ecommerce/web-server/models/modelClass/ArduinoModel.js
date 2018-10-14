'use strict'

class ArduinoModel {
    constructor(ArduinoObject) {
        ArduinoObject && Object.assign(ArduinoObject);
    }


    setArduinoNumber(num) {
        this.arduino_num = num;
    }

    setProductId(product_id) {
        this.product_id = product_id;
    }

    getArduinoNumber () {
        return this.arduino_num;
    }

    getProductId() {
        return this.product_id;
    }
}