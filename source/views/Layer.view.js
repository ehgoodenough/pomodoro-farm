import Preact from "preact"

import "views/Layer.view.less"

export default function Layer(props) {
    return (
        <svg className="Layer" style={{"left": props.layer.x + "em", "top": props.layer.y + "em"}}
            viewBox={`${props.layer.x} ${props.layer.y} ${props.layer.width} ${props.layer.height}`} xmlns="http://www.w3.org/2000/svg">
            <polygon points={getPoints(props.layer.points)} fill={props.layer.color}/>
        </svg>
    )
}

function getPoints(points) {
    return points.map((point) => (point.x + "," + point.y)).join(" ")
}
