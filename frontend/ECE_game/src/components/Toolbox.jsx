import DraggableComponent from "./DraggableComponent";

function Toolbox() {
  return (
    <div className="flex gap-4 p-4 text-black bg-gray-200 justify-center border-t border-gray-400">
      <DraggableComponent type="resistor" />
      <DraggableComponent type="capacitor" />
      <DraggableComponent type="battery" />
    </div>
  );
}

export default Toolbox;
