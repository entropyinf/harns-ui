import Konva from "konva";
import type { Vector2d } from "konva/lib/types";
import React from "react";
import { circle, rect, triangle } from "./basic";

type Attribute = {
  name: string
  description?: string
  validate?(value: any): [boolean, string]
}

export interface ThingType {
  readonly id: string
  readonly Icon: React.FC
  thing(pos: Vector2d): Thing
}

export interface Thing {
  readonly id: string
  readonly type: ThingType
  readonly node: Konva.Group | Konva.Shape
}

function arrayToRecord<T extends { id: string }>(array: T[]): Record<string, T> {
  return array.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as Record<string, T>);
}

function createImageThingType(id: string, src: string): ThingType {
  const Icon: React.FC = () => <img src={src} width={50} height={50} />;

  const thing = (pos: Vector2d): Thing => {
    const img = new Image();
    img.src = src;
    const node = new Konva.Image({
      x: pos.x,
      y: pos.y,
      image: img,
      width: 150,
      height: 150,
    });

    return {
      id,
      type: { id, Icon, thing },
      node,
    };
  };

  return {
    id,
    Icon,
    thing,
  };
}


import Fan from "@/assets/fan.svg";

export const things: Record<string, ThingType> = arrayToRecord([
  rect,
  circle,
  triangle,
  createImageThingType("fan", Fan),
]);