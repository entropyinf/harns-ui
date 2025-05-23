import Konva from "konva";
import type { Vector2d } from "konva/lib/types";
import React from "react";
import { circle, rect, triangle } from "./basic";
import { heart } from "./heart";

export interface Shape {
	id: string;
	Icon: React.FC;
	node: (positions: Vector2d) => Konva.Group | Konva.Shape;
}

function arrayToRecord<T extends { id: string }>(array: T[]): Record<string, T> {
	return array.reduce((acc, item) => {
		acc[item.id] = item;
		return acc;
	}, {} as Record<string, T>);
}
function createImageShape(id: string, src: string): Shape {
	return {
		id: id,
		Icon: () => <img src={src} width={50} height={50} />,
		node: (positions) => {
			const img = new Image();
			img.src = src;
			return new Konva.Image({
				x: positions.x,
				y: positions.y,
				image: img,
				width: 150,
				height: 150,
			})
		}
	}
}

import Fan from "@/assets/fan.svg";
export const elements: Record<string, Shape> = arrayToRecord([
	rect,
	circle,
	heart,
	triangle,
	createImageShape("fan", Fan),
]);