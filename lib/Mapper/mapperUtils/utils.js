function generateRange(range) {
    let { start, end } = range;
    let values = []
    for (let index = start; index <= end; index++)
        values.push(index)
    return values
}

module.exports.generateRange = generateRange