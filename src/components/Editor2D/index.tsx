import { useLayoutEffect, useRef } from 'react';
import { things } from './thing';
import { EditorStage } from './stage';
import { Container, List, ListItem, StageBox } from './styled';

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
    e.dataTransfer.setData('ThingId', id);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('ThingId')
    const thing = things[id];
    if (thing) {
      const { left, top } = box.current?.getBoundingClientRect() || { left: 0, top: 0 };
      const x = e.clientX - left;
      const y = e.clientY - top;
      stage.current?.add({ x, y }, thing);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <List>
        {Object.entries(things).map(([id, thing]) => (
          <ListItem key={id} draggable onDragStart={(e) => handleDragStart(e, id)}>
            {<thing.Icon />}
          </ListItem>
        ))}
      </List>

      <StageBox ref={box} onDrop={handleDrop} onDragOver={handleDragOver} />
    </Container>
  );
};


