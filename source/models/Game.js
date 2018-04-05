import Keyb from "keyb"

import Item from "models/Item.js"
import Patch from "models/Patch.js"

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
            new Patch({"game": this, "position": {"x": 0.5, "y": 7.5}}),
            new Patch({"game": this, "position": {"x": 1.75, "y": 7.5}}),
            new Patch({"game": this, "position": {"x": 0.5, "y": 6.25}}),
            new Patch({"game": this, "position": {"x": 1.75, "y": 6.25}}),
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
}
