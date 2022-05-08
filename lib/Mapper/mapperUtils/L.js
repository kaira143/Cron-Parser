let valueConfig = require("../../Config/values.json")

function prepareMeta(mappedObject) {
    mappedObject.days = valueConfig.days
    mappedObject.parser = "LastDay"
    return mappedObject
}

module.exports = prepareMeta