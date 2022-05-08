let valueConfig = require("../Config/values.json")
let mapperUitls = require("./mapperUtils");

class Mapper {
    constructor(data) {
        this.type = data.type
        this.key = data.value
    }
    getMappedData() {
        try {
            let mappedObject = { type: this.type, key: this.key }
            let symbol = this.getSymbol()
            mappedObject.symbol = symbol
            if (mapperUitls.hasOwnProperty(mappedObject.symbol))
                mappedObject = mapperUitls[mappedObject.symbol](mappedObject)
            return mappedObject
        } catch (e) {
            throw new Error(e)
        }
    }
    getSymbol() {
        let symbol = this.key
        let symbolsConf = valueConfig.symbols
        for (let s of symbolsConf) {
            if (this.key.indexOf(s) > -1) {
                symbol = s;
                break
            }
        }
        return symbol
    }
}

module.exports = Mapper