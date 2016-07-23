import Tile from "scripts/model/Tile.js"

export default {
    HOE: {
        name: "hoe",
        applyTo: function(entity) {
            if(entity instanceof Tile) {
                if(entity.isHoed != true) {
                    entity.isHoed = true
                    console.log("hoeing")
                }
            }
        }
    },
    WATERING_CAN: {
        name: "watering can",
        applyTo: function(entity) {
            if(entity instanceof Tile) {
                if(entity.isHoed == true
                && entity.isWatered != true) {
                    entity.isWatered = true
                    console.log("watering")
                }
            }
        }
    },
}
