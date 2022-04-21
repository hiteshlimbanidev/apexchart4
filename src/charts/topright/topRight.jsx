import React from "react";
import ReactApexChart from "react-apexcharts";
import "../topLeft/style.css";
const options = {
  chart: {
    height: 350,
    type: "line",
    stacked: false,
  },
  colors: ["#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800"],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
    // width: [1, 1, 4, 4],
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
    },
  },
  title: {
    text: "Recent Operation Trends",
    align: "center",
  },
  xaxis: {
    categories: ["T-12", "T-9", "T-6", "T-3"],
  },

  yaxis: [
    {
      axisTicks: {
        show: true,
      },

      tooltip: {
        enabled: true,
      },
    },
    {
      seriesName: ["Economic Occ."],

      opposite: true,

      min: 75,
      max: 100,
      tickAmount: 5,
      formatter: function (val) {
        return val;
      },
    },
  ],
  legend: {
    show: false,
  },
};

const toprightdata = [
  {
    name: "GPR",
    data: [1593544, 1601680, 1612080, 1612080],
  },
  {
    name: "NRI",
    data: [1452073.14, 1456483.4666666666, 1422253.3399999999, 1396388.84],
  },
  {
    name: "Economic Occ.",
    data: [
      0.9112224952684079, 0.909347351947122, 0.8822473698575752,
      0.8662031909086398,
    ],
  },
  {
    name: "Physical Occ.",
    data: [
      0.9509309626844317, 0.9532151574180444, 0.9371936504391841,
      0.9252239591087291,
    ],
  },
];
function TopRight() {
  let series = toprightdata.map((a, key) => ({
    name: a.name,
    type: String(a.data[0]).slice(0, 2) === "0." ? "line" : "column",
    data: a.data.map((i) =>
      String(i).slice(0, 2) === "0." ? (i * 100).toFixed(1) : i.toFixed(0)
    ),
  }));
  console.log(series);
  return (
    <React.Fragment>
      <div>
        <div>
          <ReactApexChart
            options={options}
            series={series}
            height={350}
            type="line"
          />
        </div>
        <table className="table">
          <tbody>
            {toprightdata.map((tabledata, key) => (
              <tr>
                <th>
                  <div
                    className="dot"
                    style={{ backgroundColor: `${options.colors[key]}` }}
                  ></div>
                  {tabledata.name}
                </th>
                {tabledata.data.map((data) =>
                  String(data).slice(0, 2) === "0." ? (
                    <td>{(data * 100).toFixed(1)}%</td>
                  ) : (
                    <td>${data.toFixed(0)}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default TopRight;
