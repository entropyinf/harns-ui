import Konva from "konva"
import type { Shape } from "./shapes"

export const rect: Shape = {
	id: "rect",
	Icon: () => <div>矩形</div>,
	node: (positions) => new Konva.Rect({
		x: positions.x,
		y: positions.y,
		width: 50,
		height: 50,
		fill: "gray",
		stroke: "black",
		strokeWidth: 1,
	})
}

export const circle: Shape = {
	id: "circle",
	Icon: () => <div>圆形</div>,
	node: (positions) => new Konva.Circle({
		x: positions.x,
		y: positions.y,
		radius: 30,
		fill: "green",
		stroke: "black",
		strokeWidth: 1,
	})
}

export const triangle: Shape = {
	id: "triangle",
	Icon: () => <div>三角形</div>,
	node: (positions) => new Konva.Line({
		points: [positions.x, positions.y - 30, positions.x + 30, positions.y + 30, positions.x - 30, positions.y + 30, positions.x, positions.y - 30],
		closed: true,
		fill: "blue",
		stroke: "black",
		strokeWidth: 1,
	})
};