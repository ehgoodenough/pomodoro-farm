import ShortID from "shortid"

export default class KeySet {
    constructor(values = new Array()) {
        if(values instanceof Array) {
            values.forEach((value) => {
                this.add(value)
            })
        } else {
            this.add(values)
        }
    }
    add(value) {
        if(value.key == "add"
        || value.key == "remove") {
            throw new Error("nah")
        }

        if(value.key == undefined) {
            value.key = ShortID.generate()
        }

        this[value.key] = value
    }
    remove(value) {
        delete this[value.key]
    }
    map(callback) {
        return Object.keys(this).map((key) => {
            return callback(this[key], key)
        })
    }
}
