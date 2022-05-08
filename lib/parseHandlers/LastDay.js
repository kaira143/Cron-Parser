let LastDayError = require("../Errors/LastDayError.js")

class LastDay {
    constructor(meta) {
        this.key = meta.key;
        this.days = meta.days;
        this.type = meta.type;
    }
    getParsedValues() {
        try {
            if (this.type == 'week') {
                if (this.key.length > 1) {
                    let [num, s] = this.key.split('L')
                    if (!this.days[Number(num)-1])
                        this.error()
                    return "Last " + this.days[Number(num) - 1] + " of the Month"
                }
                return this.days[this.days.length - 1]
            }
            else if (this.type == 'day') {
                if (this.key == "LW")
                    return 'Last week day of the Month'
                else if (this.key.index("-") > -1) {
                    let [s, day] = this.key.split("-")
                    let finalOut = Number(day) > 1 ? (day + " days") : (day + " day")
                    return finalOut + " from the end of the month"
                }
                return 'Last day of the Month'
            }
            else
                return ''
        } catch (e) {
            this.error()
        }
    }
    error() {
        throw new LastDayError("Invalid value for " + this.type + "  " + this.key)
    }
}

module.exports = LastDay