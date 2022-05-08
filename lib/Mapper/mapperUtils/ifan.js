let utils = require("./utils")
let valueConfig = require("../../Config/values.json")

function prepareMeta(mappedObject) {
    mappedObject.values = utils.generateRange(valueConfig.ranges[mappedObject.type])
    mappedObject.parser = "Range"
    return mappedObject
}

module.exports = prepareMeta