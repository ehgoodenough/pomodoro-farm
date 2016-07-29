import Tile from "scripts/model/Tile.js"

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
}
