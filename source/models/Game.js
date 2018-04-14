import Keyb from "keyb"

import Item from "models/Item.js"
import Patch from "models/Patch.js"
import Layer from "models/Layer.js"
import Clock from "models/Clock.js"

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
                "color": "#8BB271",
                "points": [
                    {"x": 0, "y": 15},
                    {"x": 32, "y": 15},
                    {"x": 32, "y": 30},
                    {"x": 0, "y": 30},
                ]
            }),
        ]
        // this.layers = [
        //     new Layer({
        //         "color": "#333",
        //         "points": [
        //             {"x": 0, "y": 12},
        //             {"x": 20, "y": 12},
        //             {"x": 24, "y": 9},
        //             {"x": 32, "y": 9},
        //             {"x": 32, "y": 20},
        //             {"x": 0, "y": 20},
        //         ]
        //     }),
        //     new Layer({
        //         "color": "#222",
        //         "points": [
        //             {"x": 0, "y": 14},
        //             {"x": 8, "y": 14},
        //             {"x": 12, "y": 17},
        //             {"x": 32, "y": 17},
        //             {"x": 32, "y": 30},
        //             {"x": 0, "y": 30},
        //         ]
        //     }),
        //     new Layer({
        //         "color": "#111",
        //         "points": [
        //             {"x": 0, "y": 23},
        //             {"x": 12, "y": 23},
        //             {"x": 16, "y": 19},
        //             {"x": 22, "y": 19},
        //             {"x": 22, "y": 23},
        //             {"x": 32, "y": 23},
        //             {"x": 32, "y": 30},
        //             {"x": 0, "y": 30},
        //         ]
        //     })
        // ]

        this.gold = undefined

        this.clock = new Clock({"game": this})
    }
    update(delta) {
        if(Keyb.isDown("<escape>")) {
            this.selectedItem = undefined
        }

        this.patches.forEach((patch) => {
            patch.update(delta)
        })
    }
    doThings() {
        this.patches.forEach((patch) => {
            patch.doThings()
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

// TODO: Make the patches/seeds/plants a bit more graphical
// TODO: Freeze all interaction with the patches while the clock is running.
// TODO: Return the shopping interface to the game.
