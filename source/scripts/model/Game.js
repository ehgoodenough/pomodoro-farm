import KeySet from "scripts/model/struct/KeySet.js"
import Player from "scripts/model/Player.js"
import Tile from "scripts/model/Tile.js"

export default class Game {
    constructor() {
        this.player = new Player()

        this.tiles = new KeySet()
        for(var x = -1; x <= +1; x++) {
            for(var y = -1; y <= +1; y++) {
                this.tiles.add(new Tile({
                    position: {x: x, y: y},
                    color: "#C00",
                    game: this,
                }))
            }
        }
        this.camera = {
            position: {x: 0, y: 0}
        }
    }
    update(delta) {
        this.player.update(delta)
    }
}
