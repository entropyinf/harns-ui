import Konva from "konva";
import type { Shape } from "./shapes";

const HeartIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor" />
	</svg>
);

export const heart: Shape = {
	id: "heart",
	Icon: HeartIcon,
	node: (positions) => {
		const heartShape = new Konva.Shape({
			sceneFunc: (context) => {
				context.beginPath();
				context.moveTo(positions.x, positions.y);
				context.bezierCurveTo(positions.x, positions.y - 10, positions.x - 20, positions.y - 20, positions.x - 30, positions.y - 10);
				context.bezierCurveTo(positions.x - 40, positions.y, positions.x - 40, positions.y + 20, positions.x - 20, positions.y + 30);
				context.bezierCurveTo(positions.x, positions.y + 40, positions.x + 40, positions.y + 40, positions.x + 20, positions.y + 30);
				context.bezierCurveTo(positions.x + 40, positions.y + 20, positions.x + 40, positions.y, positions.x + 30, positions.y - 10);
				context.bezierCurveTo(positions.x + 20, positions.y - 20, positions.x, positions.y - 10, positions.x, positions.y);
				context.closePath();
				context.fillStrokeShape(heartShape);
			},
			fill: "red",
			stroke: "black",
			strokeWidth: 1,
		});
		return heartShape;
	}
}