import Keyb from "keyb"

import Item from "models/Item.js"
import Patch from "models/Patch.js"
import Layer from "models/Layer.js"

export default class Game {
    constructor(game) {
        this.score = 0

        this.selectedItem = undefined

        this.items = {
            "seeds": new Item({
                "definition": "seeds",
                "game": this,
                "amount": 3,
            }),
            "watering can": new Item({
                "definition": "watering can",
                "game": this
            }),
            "crop": new Item({
                "definition": "crop",
                "game": this,
                "amount": null,
            })
        }

        this.patches = [
            new Patch({"game": this, "position": {"x": 5, "y": 5}}),
            new Patch({"game": this, "position": {"x": 6, "y": 6}}),
            new Patch({"game": this, "position": {"x": 7, "y": 7}}),
        ]

        this.layers = [
            new Layer({
                "points": [
                    {"x": 0, "y": 8},
                    {"x": 32-4, "y": 8},
                    {"x": 32, "y": 16},
                    {"x": 0+4, "y": 16},
                ]
            }),
        ]

        this.gold = undefined
    }
    update(delta) {
        if(Keyb.isDown("<escape>")) {
            this.selectedItem = undefined
        }

        this.patches.forEach((patch) => {
            patch.update(delta)
        })
    }
    sell() {
        if(this.items["crop"].amount > 0) {
            this.items["crop"].amount -= 1
            this.gold = this.gold || 0
            this.gold += 30
        }
    }
    buy() {
        if(this.gold >= 15) {
            this.gold -= 15
            this.items["seeds"].amount += 1
        }
    }
}
