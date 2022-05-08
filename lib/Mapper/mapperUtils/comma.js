let utils = require("./utils")
let valueConfig = require("../../Config/values.json")

function prepareMeta(mappedObject) {
    mappedObject.values = utils.generateRange(valueConfig.ranges[mappedObject.type])
    if (mappedObject.type == 'month' || mappedObject.type == 'week')
        mappedObject.subValues = (mappedObject.type == "week") ? valueConfig.days : valueConfig.months
    mappedObject.parser = "List"
    return mappedObject
}

module.exports = prepareMeta