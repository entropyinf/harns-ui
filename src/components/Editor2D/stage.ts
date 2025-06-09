import Konva from "konva";
import type { Vector2d } from "konva/lib/types";
import { type ThingType } from "./thing";

type EditorStageConfig = { container: HTMLDivElement };

export class EditorStage {
  private stage: Konva.Stage;
  private background: Konva.Layer
  private grid: Konva.Group;
  private content: Konva.Layer
  private transformer: Konva.Transformer;

  constructor(config: EditorStageConfig) {
    const { container } = config;
    this.stage = new Konva.Stage({
      container,
      width: container.clientWidth,
      height: container.clientHeight,
    })
    this.background = new Konva.Layer();
    this.stage.add(this.background);
    this.grid = new Konva.Group();
    this.background.add(this.grid);
    this.content = new Konva.Layer();
    this.stage.add(this.content);
    this.transformer = new Konva.Transformer();
    this.content.add(this.transformer);

    this.init();
  }

  public add(pos: Vector2d, ele: ThingType) {
    const originalX = pos.x;
    const originalY = pos.y;

    const newX = (originalX - this.stage.x()) / this.stage.scaleX();
    const newY = (originalY - this.stage.y()) / this.stage.scaleY();

    const thing = ele.thing({ x: newX, y: newY })

    const node = thing.node

    node.draggable(true);
    this.content.add(node);

    node.on('click tap', () => {
      this.transformer.nodes([node]);
      this.transformer.getLayer()?.batchDraw();
    });

    node.on('dragend', () => {
      this.transformer.nodes([node]);
      this.transformer.getLayer()?.batchDraw();
    });
  }

  public destroy() {
    this.stage.destroy();
  }

  private init() {
    this.drawTilesGrid();
    this.enableMouseScale();
    this.stage.draggable(true)
  }

  private drawTilesGrid() {
    const gridSize = 40;
    const stage = this.stage;

    this.grid.destroyChildren();

    // 获取舞台的缩放比例和偏移量
    const scale = stage.scaleX();
    const scaledSize = gridSize * scale;
    const offsetX = Math.floor(stage.x() / scaledSize) * gridSize;
    const offsetY = Math.floor(stage.y() / scaledSize) * gridSize;

    // 获取舞台的宽度和高度
    const scaleFactor = Math.min(scaledSize, gridSize / 4);
    const w = Math.floor(stage.width() / scaleFactor) * gridSize;
    const h = Math.floor(stage.height() / scaleFactor) * gridSize;

    const left = -2 * w - offsetX;
    const right = 2 * w - offsetX;
    const top = -2 * h - offsetY;
    const bottom = 2 * h - offsetY;

    // 绘制垂直网格线
    for (let x = left; x < right; x += gridSize) {
      const line = new Konva.Line({
        points: [x, top, x, bottom],
        stroke: 'rgba(128,128,0,0.5)',
        strokeWidth: 1,
      });
      this.grid.add(line);
    }

    // 绘制水平网格线
    for (let y = top; y < bottom; y += gridSize) {
      const line = new Konva.Line({
        points: [left, y, right, y],
        stroke: 'rgba(128,128,0,0.5)',
        strokeWidth: 1,
      });
      this.grid.add(line);
    }
  }

  private enableMouseScale() {
    const scaleBy = 1.1;
    const stage = this.stage;

    stage.on('wheel', (e) => {
      e.evt.preventDefault();

      const oldScale = stage.scaleX();
      const pointer = stage.getPointerPosition();
      if (!pointer) return;

      const mousePointTo = {
        x: (pointer.x - stage.x()) / oldScale,
        y: (pointer.y - stage.y()) / oldScale
      };

      let newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;

      // 设置最小,最大缩放值
      if (newScale < 0.25) newScale = 0.25;
      if (newScale > 4) newScale = 4;

      const newPos = {
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale
      };

      // 设置舞台的缩放值
      stage.scale({ x: newScale, y: newScale });
      // 设置舞台的位置
      stage.position(newPos);
      // 批量绘制舞台
      stage.batchDraw();
    });
  }
}
