import ITEMS from "scripts/data/ITEMS.js"

export default class Player {
    constructor() {
        this.inventorySelection = 0
        this.inventory = [
            ITEMS.HOE, ITEMS.WATERING_CAN
        ]
    }
    get item() {
        return this.inventory[this.inventorySelection]
    }
}
