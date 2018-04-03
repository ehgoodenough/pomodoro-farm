export default class Item {
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
