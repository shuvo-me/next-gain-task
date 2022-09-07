import dynamic from "next/dynamic";
import React from "react";

const ApexPieChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// const phoneFromeDaraz = api.filter(item=> item.seller_name == 'Daraz').length
const PieChart = () => {
  let chartOptions = {
    series: [44, 55, 13],
    // colors: ["#F44336", "#E91E63", "#9C27B0"],
    options: {
      colors: ["#84AF27", "#0095A0", "#FFC239"],
      chart: {
        type: "pie",
      },
      labels: ["Daraz", "Bikroi", "Pickabo"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <h4 className=" text-[#575757] text-[20px] font-medium mb-7">Sources</h4>
      {typeof window !== "undefined" && (
        <ApexPieChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="pie"
          width={380}
        />
      )}
    </div>
  );
};

export default PieChart;
