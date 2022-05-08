let mapper = require("./Mapper/typeMapper.js")
let parsingHangler = require("./parseHandlers")
class parser {
    constructor(input) {
        this.input = input
    }

    parse() {
        try {
            let data = this.input.split(" ")
            if (data.length !== 6)
                throw new Error("Invalid cron string")
            let command = data.pop();
            let result = {}
            let [minute, hour, day, month, week] = data
            result.minute = new mapper({ value: minute, type: "minute" }).getMappedData()
            result.hour = new mapper({ value: hour, type: "hour" }).getMappedData()
            result["day of month"] = new mapper({ value: day, type: "day" }).getMappedData()
            result.month = new mapper({ value: month, type: "month" }).getMappedData()
            result["day of week"] = new mapper({ value: week, type: "week" }).getMappedData()
            this.generateValues(result)
            result.command = command
            return result
        } catch (e) {
            throw new Error(e)
        }
    }
    generateValues(mappedData) {
        for (let k in mappedData) {
            if (!mappedData[k]?.parser) {
                mappedData[k] = mappedData[k].key
            }
            else {
                let handler = parsingHangler[mappedData[k].parser]
                let instance = new handler(mappedData[k])
                let parsedData = instance.getParsedValues();
                mappedData[k] = parsedData
            }

        }
        return mappedData
    }
}

module.exports = parser