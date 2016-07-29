import ITEMS from "scripts/data/ITEMS.js"
import {Input} from "scripts/Input.js"

export default class Player {
    constructor() {
        this.inventorySelection = 0
        this.inventory = [ITEMS.HOE, ITEMS.WATERING_CAN]

        this.inputs = {
            0: new Input("1"),
            1: new Input("2"),
            2: new Input("3"),
            3: new Input("4"),
            4: new Input("5"),
            5: new Input("6"),
            6: new Input("7"),
            7: new Input("8"),
            8: new Input("9"),
            9: new Input("0"),
        }
    }
    get item() {
        return this.inventory[this.inventorySelection]
    }
    update(delta) {
        for(var i = 0; i <= 9; i += 1) {
            if(this.inputs[i].isDown(delta)) {
                this.inventorySelection = i
                console.log("set item:", this.item.name)
            }
        }
    }
}
