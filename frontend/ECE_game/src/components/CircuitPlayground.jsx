import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Toolbox from './Toolbox';
import Canvas from './Canvas';

function CircuitPlayground() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-screen">
        <Canvas />
        <Toolbox />
      </div>
    </DndProvider>
  );
}

export default CircuitPlayground;
