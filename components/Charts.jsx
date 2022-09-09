import React from "react";
import ColoumnChart from "./ColoumnChart";
import PieChart from "./PieChart";

const Charts = () => {
  return (
    <div className="charts grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 xs:px-4 md:px-0 md:container mx-auto mt-[50px]">
      <PieChart />
      <ColoumnChart />
    </div>
  );
};

export default Charts;
