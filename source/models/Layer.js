export default class Layer {
    constructor(layer) {
        this.points = layer.points
        this.color = layer.color

        this.x = Math.min(...this.points.map(point => point.x))
        this.y = Math.min(...this.points.map(point => point.y))
        this.width = Math.max(...this.points.map(point => point.x)) - this.x
        this.height = Math.max(...this.points.map(point => point.y)) - this.y
    }
}
