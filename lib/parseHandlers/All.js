class All {
    constructor(meta) {
        this.key = meta.key;
        this.values = meta.values;
        this.type = meta.type;
    }
    getParsedValues() {
        return this.values.join(" ")
    }
    
}

module.exports = All