export default class Patch {
    constructor(patch) {
        this.game = patch.game
        this.position = patch.position
    }
    update(delta) {
        // if(this.isSeeded
        // && this.isWatered
        // && this.time > 0) {
        //     this.time -= delta.ms
        //     if(this.time <= 0) {
        //         this.time = 0
        //         this.isHarvestable = true
        //         this.isSeeded = false
        //         this.isWatered = false
        //         console.log("Crop is ready to harvest")
        //     }
        // }
    }
    doThings() {
        if(this.isSeeded
        && this.isWatered) {
            this.isHarvestable = true
            this.isSeeded = false
            this.isWatered = false
            console.log("Crop is ready to harvest")
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
