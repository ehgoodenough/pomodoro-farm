import Keyb from "keyb"

export default class Game {
    constructor(game) {
        this.score = 0

        this.selectedItem = undefined

        this.items = [
            new Item({
                "game": this,
                "definition": "seeds",
                "amount": 3,
            }),
            new Item({
                "game": this,
                "definition": "watering can"
            }),
        ]

        this.patches = [
            new Patch({"game": this}),
            new Patch({"game": this}),
            new Patch({"game": this}),
            new Patch({"game": this}),
            new Patch({"game": this}),
        ]
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
                console.log("Plant is ready to harvest")
            }
        }
    }
    get canInteract() {
        return this.game.selectedItem !== undefined
            && this.game.selectedItem.canBeUsed
            || (this.game.selectedItem === undefined && this.isHarvestable)
    }
    onInteract() {
        if(this.game.selectedItem === undefined) {
            if(this.isHarvestable == true) {
                this.isHarvestable = false

                let random = Math.random()

                if(random < 0.25) {
                    alert("You harvested 1 crop, and got 1 extra seed!")
                    this.game.items[0].amount += 1
                } else {
                    alert("You harvested 1 crop!")
                }

                if(this.game.items[2] == undefined) {
                    this.game.items.push(new Item({
                        "game": this.game,
                        "definition": "crop",
                        "amount": 1,
                    }))
                } else {
                    this.game.items[2].amount += 1
                }
            }
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
