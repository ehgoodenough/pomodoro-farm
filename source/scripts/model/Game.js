import KeySet from "scripts/model/struct/KeySet.js"

class Tile {
    constructor(tile) {
        this.position = tile.position || {x: 0, y: 0}
        this.color = tile.color || "#FFF"
    }
    get key() {
        return this.position.x + "x" + this.position.y
    }
}

export default class Game {
    constructor() {
        this.tiles = new KeySet([
            new Tile({
                position: {x: 0, y: 0},
                color: "#C00"
            }),
            new Tile({
                position: {x: 0, y: 1},
                color: "#0C0"
            }),
        ])
        this.camera = {
            position: {x: 0, y: 0}
        }
    }
}
