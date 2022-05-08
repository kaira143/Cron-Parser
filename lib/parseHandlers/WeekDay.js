class WeekDay {
    constructor(meta) {
        this.key = meta.key;
        this.type = meta.type;
    }
    getParsedValues() {
        if (this.type === "day") {
            let date = this.key.split('W')[0]
            date = date || 0
            return "Nearest weekday to day " + date + " of the month"
        }
        return ""
    }

}

module.exports = WeekDay