import { useState, useRef } from "react";
import { useDrop } from "react-dnd";

export const componentColors = {
  resistor: "bg-yellow-200",
  capacitor: "bg-blue-200",
  inductor: "bg-green-200",
  battery: "bg-red-200",
  transistor: "bg-purple-200",
  default: "bg-gray-200",
};

function Canvas() {
  const [components, setComponents] = useState([]);
  const canvasRef = useRef(null);

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "component",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasRect = canvasRef.current.getBoundingClientRect();

      const x = offset.x - canvasRect.left;
      const y = offset.y - canvasRect.top;

      const id = crypto.randomUUID(); // Or use a counter

      const newComponent = {
        id,
        type: item.type,
        x,
        y,
      };

      setComponents((prev) => [...prev, newComponent]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  dropRef(canvasRef); // Attach drop zone to canvas DOM

  return (
    <div
      ref={canvasRef}
      className={`flex-1 relative bg-gray-100 transition-colors duration-200 overflow-hidden ${
        isOver ? "bg-blue-100" : ""
      }`}
      style={{ width: "100%", height: "100%" }}
    >
      {components.map((comp) => (
        <div
          key={comp.id}
          className={`absolute px-2 py-1 text-sm border rounded shadow cursor-move ${
            componentColors[comp.type] || componentColors.default
          }`}
          style={{ top: comp.y, left: comp.x }}
        >
          {comp.type}
        </div>
      ))}
      {components.length === 0 && (
        <p className="text-gray-400 text-center mt-10">Drop components here</p>
      )}
    </div>
  );
}

export default Canvas;
