import { useLayoutEffect, useRef } from 'react';
import { thingTypes } from './thing_type';
import { EditorStage } from './stage';
import { Container, StageBox, ThingTypeBox, ThingTypeItem } from './styled';

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
    const element = thingTypes[id];
    if (element) {
      const rect = box.current?.getBoundingClientRect();
      const x = e.clientX - (rect?.left || 0);
      const y = e.clientY - (rect?.top || 0);
      stage.current?.add({ x, y }, element);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <ThingTypeBox>
        {Object.entries(thingTypes).map(([id, thingType]) => (
          <ThingTypeItem key={id} draggable onDragStart={(e) => handleDragStart(e, id)}>
            {<thingType.Icon />}
          </ThingTypeItem>
        ))}
      </ThingTypeBox>

      <StageBox
        ref={box}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      />
    </Container>
  );
};


