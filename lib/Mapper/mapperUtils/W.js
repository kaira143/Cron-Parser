let valueConfig = require("../../Config/values.json")

function prepareMeta(mappedObject) {
    mappedObject.parser = "WeekDay"
    return mappedObject
}

module.exports = prepareMeta