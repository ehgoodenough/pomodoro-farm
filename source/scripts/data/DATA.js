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
        BLACK: "#60635A",
        PURPLE: "#846380",
        RED: "#C25C4E",
        YELLOW: "#E9D799",
        GREEN: "#B9B963",
        WHITE: "#F6EFDD",
    },
    IMAGES: {
        SOIL: require("assets/images/soil.png"),
        TILLED_SOIL: require("assets/images/tilled_soil.png"),
        SEED: require("assets/images/seed.png"),
        SPROUT: require("assets/images/sprout.png"),
        PLANT: require("assets/images/plant.gif"),
    }
}
