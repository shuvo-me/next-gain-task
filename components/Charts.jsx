import React from "react";
import ColoumnChart from "./ColoumnChart";
import PieChart from "./PieChart";

const Charts = () => {
  return (
    <div className="charts grid grid-cols-2 container mx-auto mt-[50px]">
      <PieChart />
      <ColoumnChart />
    </div>
  );
};

export default Charts;
