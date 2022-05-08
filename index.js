let parser = require("./lib/parser")

function getParsedData(input){
    if (!input)
        throw new Error("Invalid input for parsing")
    let inst = new parser(input)
    return inst.parse()
}

module.exports = getParsedData