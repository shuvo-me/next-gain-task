import dynamic from "next/dynamic";
import React from "react";
import { api } from "../assets/data";

const ApexPieChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const totalPhones = api.length;
const phoneFromeBikroy = api.filter(
  (item) => item.ad_category == "Bikroy.com"
).length;

const phoneFromDarz = api.filter(
  (item) => item.ad_category == "Daraz.com"
).length;

const phoneFromPickabo = api.filter(
  (item) => item.ad_category == "Pickabo.com"
).length;

const getPercentage = (amount) => {
  return (amount / totalPhones) * 100;
};

console.log({ phoneFromeBikroy, phoneFromDarz, phoneFromPickabo });
const PieChart = () => {
  let chartOptions = {
    series: [
      getPercentage(phoneFromDarz),
      getPercentage(phoneFromeBikroy),
      getPercentage(phoneFromPickabo),
    ],
    // colors: ["#F44336", "#E91E63", "#9C27B0"],
    options: {
      colors: ["#84AF27", "#0095A0", "#FFC239"],
      chart: {
        type: "pie",
      },
      labels: [
        `Daraz: ${Math.round(getPercentage(phoneFromDarz))}%`,
        `Bikroi: ${Math.round(getPercentage(phoneFromeBikroy))}%`,
        `Pickabo: ${Math.round(getPercentage(phoneFromPickabo))}%`,
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 500,
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
