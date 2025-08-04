import { useDrag } from 'react-dnd';

function DraggableComponent({ type }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'component',
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  return (
    <div
      ref={dragRef}
      className={`p-2 px-4 border rounded-md shadow-sm cursor-move select-none bg-white`}
    >
      {type}
    </div>
  );
}

export default DraggableComponent;
