import Konva from "konva"
import type { ThingType as ThingType } from "."
import { v4 as uuidv4 } from 'uuid';

export const rect: ThingType = {
  id: "rect",
  Icon: () => <div>Rect</div>,
  thing: (pos) => {
    return {
      id: uuidv4(),
      type: rect,
      node: new Konva.Rect({
        x: pos.x,
        y: pos.y,
        width: 50,
        height: 50,
        fill: "gray",
        stroke: "black",
      })
    }
  }
}

export const circle: ThingType = {
  id: "circle",
  Icon: () => <div>圆形</div>,
  thing: (pos) => {
    return {
      id: uuidv4(),
      type: circle,
      node: new Konva.Circle({
        x: pos.x,
        y: pos.y,
        radius: 30,
        fill: "green",
        stroke: "black",
        strokeWidth: 1,
      })
    }
  }
}

export const triangle: ThingType = {
  id: "triangle",
  Icon: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <polygon points="50,10 10,90 90,90" stroke="black" fill="transparent" />
    </svg>
  ),
  thing: (pos) => {
    return {
      id: uuidv4(),
      type: triangle,
      node: new Konva.Line({
        points: [pos.x, pos.y - 30, pos.x + 30, pos.y + 30, pos.x - 30, pos.y + 30, pos.x, pos.y - 30],
        closed: true,
        fill: "red",
        stroke: "black",
        strokeWidth: 1,
      })
    }
  }
};