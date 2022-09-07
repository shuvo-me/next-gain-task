import dynamic from "next/dynamic";
import React from "react";
import { api } from "../assets/data";
const ApexColoumnChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const officialPhones = api.filter((item) => item.official_warranty).length;
const unOfficialPhones = api.filter((item) => item.unofficial_warranty).length;
const withoutWarrentyPhones = api.filter((item) => item.no_warranty).length;
const usedPhones = api.filter((item) => item.used_phone).length;

console.log({
  officialPhones,
  unOfficialPhones,
  withoutWarrentyPhones,
  usedPhones,
});
const ColoumnChart = () => {
  const chartOptions = {
    series: [
      {
        name: "Total",
        data: [
          officialPhones,
          unOfficialPhones,
          withoutWarrentyPhones,
          usedPhones,
        ],
        color: "#0095A0",
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      colors: ["red"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Official", "Unofficial", "Without warranty", "Used"],
      },
      yaxis: {
        title: {
          text: "",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  };
  return (
    <div>
      <h4 className=" text-[#575757] text-[20px] font-medium mb-7">
        Conditions
      </h4>
      {typeof window !== "undefined" && (
        <ApexColoumnChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="bar"
          height={350}
        />
      )}
    </div>
  );
};

export default ColoumnChart;
