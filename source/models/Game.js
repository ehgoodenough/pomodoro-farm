import Keyb from "keyb"

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

        // this.layers = [
        //     new Layer()
        // ]

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

class Item {
    constructor(item) {
        this.game = item.game
        this.definition = item.definition
        this.amount = item.amount
    }
    get label() {
        return (this.amount !== undefined ? this.amount + "x " : "") + this.definition
    }
    onSelect() {
        console.log("Selected", this.definition)
        this.game.selectedItem = this
    }
    get isSelected() {
        return this.game.selectedItem === this
    }
    get canBeUsed() {
        return (this.game.selectedItem.amount === undefined
            || this.game.selectedItem.amount > 0)
    }
}

class Patch {
    constructor(patch) {
        this.game = patch.game
        this.position = patch.position
    }
    update(delta) {
        if(this.isSeeded
        && this.isWatered
        && this.time > 0) {
            this.time -= delta.ms
            if(this.time <= 0) {
                this.time = 0
                this.isHarvestable = true
                this.isSeeded = false
                this.isWatered = false
                console.log("Crop is ready to harvest")
            }
        }
    }
    get canInteract() {
        return this.game.selectedItem !== undefined
            && this.game.selectedItem.canBeUsed
            || (this.game.selectedItem === undefined && this.isHarvestable)
    }
    onInteract() {
        if(this.isHarvestable == true) {
            this.game.selectedItem = undefined
            this.isHarvestable = false

            console.log("Harvested 1 crop!")

            this.game.items["crop"].amount = this.game.items["crop"].amount || 0
            this.game.items["crop"].amount += 1
        }

        if(this.game.selectedItem === undefined) {
            return
        }

        if(this.game.selectedItem.definition == "watering can"
        && this.isWatered != true
        && this.isHarvestable != true) {
            console.log("Watered this patch")
            this.isWatered = true
        }

        if(this.game.selectedItem.definition == "seeds"
        && this.game.selectedItem.amount > 0
        && this.isHarvestable != true
        && this.isSeeded != true) {
            console.log("Planted crops")
            this.game.selectedItem.amount -= 1
            this.isSeeded = true
            this.time = 1000
        }
    }
}
