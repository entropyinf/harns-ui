import { useLayoutEffect, useRef } from 'react';
import { EditorStage } from './stage';
import { things } from './thing';

export default function Editor2D() {
	const box = useRef<HTMLDivElement>(null);
	const stage = useRef<EditorStage | null>(null);

	useLayoutEffect(() => {
		const container = box.current;
		if (container) {
			stage.current = new EditorStage({ container });
		}
		return () => stage.current?.destroy()
	}, []);

	const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
		e.dataTransfer.setData('elementId', id);
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const id = e.dataTransfer.getData('elementId')
		const thing = things[id];
		if (thing) {
			const rect = box.current?.getBoundingClientRect();
			const x = e.clientX - (rect?.left || 0);
			const y = e.clientY - (rect?.top || 0);
			stage.current?.add({ x, y }, thing);
		}
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	return (
		<div style={{ display: 'flex', height: '100%' }}>
			<div style={{ width: 200, backgroundColor: '#f0f0f0', padding: 10 }}>
				{Object.entries(things).map(([id, thing]) => (
					<div
						key={id}
						draggable
						onDragStart={(e) => handleDragStart(e, id)}
						style={{ marginBottom: 10, padding: 10, backgroundColor: 'white', cursor: 'move' }}
					>
						{<thing.Icon />}
					</div>
				))}
			</div>

			<div
				ref={box}
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				style={{ flexGrow: 1, height: '100%' }}
			/>
		</div>
	);
};


