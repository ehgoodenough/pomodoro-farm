export default class Tile {
    constructor(tile) {
        this.position = tile.position || {x: 0, y: 0}
        this.game = tile.game
    }
    get key() {
        return this.position.x + "x" + this.position.y
    }
    get color() {
        if(this.isHoed) {
            if(this.isWatered) {
                return "#c38f75"
            } else {
                return "#876363"
            }
        } else {
            return "#4e3636"
        }
    }
    onClick() {
        if(!!this.game
        && !!this.game.player
        && !!this.game.player.item) {
            this.game.player.item.applyTo(this)
        }
    }
}
