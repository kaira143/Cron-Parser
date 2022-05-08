let ListError = require("../Errors/ListError.js")

class List {
    constructor(meta) {
        this.key = meta.key;
        this.values = meta.values;
        this.type = meta.type;
        this.subValues = meta.subValues;
    }
    getParsedValues() {
        try {
            let parameters = this.key.split(",")
            let valueType = null
            for (let data of parameters) {
                data = this.parseIntegerValue(data)
                if (!valueType)
                    valueType = typeof data
                else if (valueType !== typeof data)
                    this.error("Invalid combinations")
                if (typeof data === "string" && !(data in this.subValues))
                    this.error()
                if (typeof data === "number" && !(data in this.values))
                    this.error()
            }
            return this.key.replace(",", " ")
        } catch (e) {
            this.error()
        }
    }

    parseIntegerValue(value) {
        if (Number(value))
            value = Number(value)
        return value
    }

    error(message) {
        message = message || ("Invalid data provided for " + this.type + "  " + this.key)
        throw new ListError(message)
    }
}

module.exports = List