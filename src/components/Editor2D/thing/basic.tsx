import Konva from "konva"
import type { ThingType as ThingType } from "."

export const rect: ThingType = {
  id: "rect",
  Icon: () => <div>Rect</div>,
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

export const circle: ThingType = {
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

export const triangle: ThingType = {
  id: "triangle",
  Icon: () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <polygon points="50,10 10,90 90,90" stroke="black" fill="transparent" />
  </svg>,
  node: (positions) => new Konva.Line({
    points: [positions.x, positions.y - 30, positions.x + 30, positions.y + 30, positions.x - 30, positions.y + 30, positions.x, positions.y - 30],
    closed: true,
    fill: "blue",
    stroke: "black",
    strokeWidth: 1,
  })
};