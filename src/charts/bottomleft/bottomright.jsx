import React from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    height: 350,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800"],
  // dataLabels: {
  //   enabled: true,
  // },
  stroke: {
    curve: ["stepline", "smooth"],
    dashArray: [0, 5],
  },
  title: {
    text: "Gross Potential Rents vs. Net rental Income",
    align: "center",
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#fff", "transparent"], // takes an array which will be repeated on columns
    },
  },

  markers: {
    size: 1,
  },
  xaxis: {
    categories: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val;
      },
    },
  },
  legend: {
    show: true,
  },
};

const series = [
  {
    name: "GPR",
    data: [
      130272, 130272, 131740, 131740, 131740, 131740, 134340, 134340, 134340,
      134340, 134340, 134340, 130272, 130272, 131740, 131740, 131740, 131740,
      134340, 134340, 134340, 134340, 134340, 134340, 130272, 130272, 131740,
      131740, 131740, 131740, 134340, 134340, 134340, 134340, 134340, 134340,
      130272, 130272, 131740, 131740, 131740, 131740, 134340, 134340, 134340,
      134340, 134340, 134340,
    ],
  },
  {
    name: "NRI",
    data: [
      117871.3825, 120013.2625, 121311.3325, 128006.31249999999,
      126047.86249999999, 128069.55249999999, 117834.7025, 127086.5725,
      119261.08249999999, 116980.5925, 114090.3725, 115500.1125, 121206.99,
      123251.69, 125832.41, 131456.24, 129641.95, 128545.48, 127435.63,
      130237.5, 124858.68, 125068.49, 122162.8, 125652.47, 121206.99, 123251.69,
      125832.41, 131456.24, 129641.95, 128545.48, 127435.63, 130237.5,
      124858.68, 125068.49, 122162.8, 125652.47, 116558.86000000002, 121164.19,
      121987.49, 129157.23999999999, 122858.20999999999, 129220.48,
      114190.95000000001, 128237.5, 119601.01, 117818.23000000001, 115241.3,
      116037.68000000001,
    ],
  },
];
function BottomLeft() {
  return (
    <React.Fragment>
      <div>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </React.Fragment>
  );
}

export default BottomLeft;
