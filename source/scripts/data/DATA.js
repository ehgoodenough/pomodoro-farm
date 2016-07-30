import ITEMS from "scripts/data/ITEMS.js"

export default {
    TILE: {
        WIDTH: 48,
        HEIGHT: 48,
    },
    FRAME: {
        WIDTH: 360,
        HEIGHT: 480,
        COLOR: "#222",
    },
    COLORS: {
        RED: "#C25C4E",
        GREEN: "#B9B963",
        YELLOW: "#E9D799",
        PURPLE: "#846380",
        BLACK: "#60635A",
        WHITE: "#F6EFDD",
    },
    IMAGES: {
        SOIL: [
            require("assets/images/soil.png"),
        ],
        WATERED_SOIL: [
            require("assets/images/watered_soil_0.png"),
        ],
        TILLED_SOIL: [
            require("assets/images/tilled_soil_0.png"),
            require("assets/images/tilled_soil_1.png"),
            require("assets/images/tilled_soil_2.png"),
            require("assets/images/tilled_soil_3.png"),
        ],
        SEED: require("assets/images/seed.png"),
        SPROUT: require("assets/images/sprout.png"),
        PLANT: require("assets/images/plant.gif"),
    }
}
