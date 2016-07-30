import DATA from "scripts/data/DATA.js"

export default class Plant {
    constructor(tile) {
        this.stage = 0
        this.maxstage = 2
        this.tile = tile
    }
    get image() {
        if(this.stage == 0) {
            return DATA.IMAGES.SEED
        }
        if(this.stage == 1) {
            return DATA.IMAGES.SPROUT
        }
        if(this.stage == 2) {
            return DATA.IMAGES.PLANT
        }
    }
    onNewDay() {
        if(this.tile.isWatered == true
        && this.stage < this.maxstage) {
            this.stage += 1
        }
    }
}
