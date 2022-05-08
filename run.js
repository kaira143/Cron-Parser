let cronParser = require("./index")
let arguments = process.argv

try {
    console.table(cronParser(arguments[2]))
} catch (e) {
    console.log(e)
}