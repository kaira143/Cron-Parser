let RangeError = require("../Errors/RangeError.js")

class Range {
    constructor(meta) {
        this.key = meta.key;
        this.values = meta.values;
        this.type = meta.type;
    }
    getParsedValues() {
        try {
            let [start, end] = this.key.split("-");
            start = Number(start)
            end = Number(end)
            if (end > this.values[this.values.length-1] || end < this.values[0])
                end = -1
            if (start < this.values[0] || start > this.values[this.values.length-1])
                start = -1
            return this.generateValue(start, end)
        } catch (e) {
            this.error()
        }
    }
    generateValue(start, end) {
        if (start == -1 || end == -1) {
            this.error()
        }
        let data = []
        for (let index = start; index <= end; index++) {
            data.push(index)
        }
        return data.join(" ")
    }
    error() {
        throw new RangeError("Invalid range values for " + this.type + "  " + this.key)
    }
}

module.exports = Range