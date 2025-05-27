import Konva from "konva";
import type { Vector2d } from "konva/lib/types";
import React from "react";
import { circle, rect, triangle } from "./basic";

type Characteristic = {
  name: string
  description?: string
}

type Property = {
  name: string
  description?: string
}

export interface ThingType<C = Characteristic, P = Property> {
  id: string
  typeId?: string
  group?: string
  characteristics?: Record<string, C>
  Icon: React.FC
  node(pos: Vector2d): Konva.Group | Konva.Shape
}

export interface Thing {
  id: string
  type: ThingType
  characteristics?: Record<string, any>
  properties?: Record<string, any>
}

function arrayToRecord<T extends { id: string }>(array: T[]): Record<string, T> {
  return array.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as Record<string, T>);
}

function createThingByImg(id: string, src: string): ThingType {
  return {
    id: id,
    Icon: () => <img src={src} width={50} height={50} />,
    node: (pos) => {
      const img = new Image();
      img.src = src;
      return new Konva.Image({
        x: pos.x,
        y: pos.y,
        image: img,
        width: 150,
        height: 150,
      })
    }
  }
}

import Fan from "@/assets/fan.svg";

export const things: Record<string, ThingType> = arrayToRecord([
  rect,
  circle,
  triangle,
  createThingByImg("fan", Fan),
]);