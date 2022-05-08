let IntervalError = require("../Errors/IntervalError.js")


class Interval {
    constructor(meta) {
        this.key = meta.key;
        this.values = meta.values;
        this.type = meta.type;
    }
    getParsedValues() {
        try {
            let [first, second] = this.key.split("/");
            return this.generateValue(first, second)
        } catch (e) {
            this.error()
        }
    }
    generateValue(first, second) {
        try {
            let data = []
            if (first === "*") {
                second = Number(second)
                if (isNaN(second))
                    this.error()
                for (let value of this.values) {
                    if (value % second === 0)
                        data.push(value)
                }
            } else {
                if (isNaN(Number(first)) || isNaN(Number(second))) {
                    this.error()
                } else {
                    second = Number(second)
                    for (let index = first; index < this.values.length; index++) {
                        if (index % second === 0)
                            data.push(index)
                    }
                }
            }
            return data.join(" ")
        } catch (e) {
            this.error()
        }
    }
    error() {
        throw new IntervalError("Invalid Interval values for " + this.type + "  " + this.key)
    }
}

module.exports = Interval