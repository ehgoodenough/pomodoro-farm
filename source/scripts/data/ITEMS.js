import Tile from "scripts/model/Tile.js"
import Plant from "scripts/model/Plant.js"

export default {
    HOE: {
        name: "hoe",
        applyTo: function(tile) {
            if(tile.isHoed != true) {
                tile.isHoed = true
                console.log("hoeing")
            }
        }
    },
    WATERING_CAN: {
        name: "watering can",
        applyTo: function(tile) {
            if(tile.isHoed == true
            && tile.isWatered != true) {
                tile.isWatered = true
                console.log("watering")
            }
        }
    },
    SEED_BAG: {
        name: "bag of seeds",
        amount: 3,
        applyTo: function(tile) {
            if(tile.isHoed == true
            && this.amount > 0) {
                this.amount -= 1
                tile.plant = new Plant(tile)
                console.log("planting;", this.amount, "remains")
            }
        }
    }
}
