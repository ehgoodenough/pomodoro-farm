import DATA from "scripts/data/DATA.js"

export default class Tile {
    constructor(tile) {
        this.position = tile.position || {x: 0, y: 0}
        this.game = tile.game

        this.imageVariation = Math.floor(Math.random() * 4)
    }
    get key() {
        return this.position.x + "x" + this.position.y
    }
    get image() {
        if(this.isWatered) {
            return DATA.IMAGES.WATERED_SOIL[0]
        }

        if(this.isHoed) {
            return DATA.IMAGES.TILLED_SOIL[this.imageVariation]
        }

        return DATA.IMAGES.SOIL[0]
    }
    onClick() {
        if(!!this.game
        && !!this.game.player) {
            if(!!this.game.player.item) {
                this.game.player.item.applyTo(this)
            } else {
                if(this.plant.stage == this.plant.maxstage) {
                    console.log("harvest!!")
                } else {
                    console.log("empty hand")
                }
            }
        }
    }
    onNewDay() {
        if(!!this.plant
        && !!this.plant.onNewDay) {
            this.plant.onNewDay()
        }

        if(this.isWatered) {
            this.isWatered = false
        }
    }
}
