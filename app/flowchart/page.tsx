// pages/index.tsx
import React from "react";
import Flowchart from "components/Flowchart.tsx";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">
        Interactive Flowchart Example
      </h1>
      <Flowchart />
    </div>
  );
};

export default HomePage;
