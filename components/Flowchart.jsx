// components/Flowchart.tsx
import React from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Edge,
  Node,
  Position,
} from "react-flow-renderer";

const initialElements: Array<Node | Edge> = [
  {
    id: "1",
    type: "input",
    position: { x: 250, y: 5 },
    data: { label: "HTML" },
  },
  { id: "2", position: { x: 100, y: 100 }, data: { label: "CSS" } },
  { id: "3", position: { x: 400, y: 100 }, data: { label: "JavaScript" } },
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

const Flowchart = () => {
  return (
    <div className="w-full h-screen">
      <ReactFlow elements={initialElements}>
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default Flowchart;
