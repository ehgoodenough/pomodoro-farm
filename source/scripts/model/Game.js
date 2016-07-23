export default class Game {
    constructor() {
        this.tiles = {
            "0x0": {
                position: {x: 0, y: 0},
                color: "#C00"
            },
            "0x1": {
                position: {x: 0, y: 1},
                color: "#C00"
            },
        }
        this.camera = {
            position: {x: 0, y: 0}
        }
    }
}
