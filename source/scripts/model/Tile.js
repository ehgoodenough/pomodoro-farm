import DATA from "scripts/data/DATA.js"

export default class Tile {
    constructor(tile) {
        this.position = tile.position || {x: 0, y: 0}
        this.game = tile.game

        this.imageVariation = Math.floor(Math.random() * 3)
    }
    get key() {
        return this.position.x + "x" + this.position.y
    }
    get image() {
        if(this.isHoed) {
            return DATA.IMAGES.TILLED_SOIL[this.imageVariation]
        }

        return DATA.IMAGES.SOIL
    }
    onClick() {
        if(!!this.game
        && !!this.game.player
        && !!this.game.player.item) {
            this.game.player.item.applyTo(this)
        }
    }
}
