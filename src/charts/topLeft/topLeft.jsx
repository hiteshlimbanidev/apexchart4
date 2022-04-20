import React from "react";
import ReactApexChart from "react-apexcharts";
import "../topLeft/style.css";
const options = {
  chart: {
    width: "100%",
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
  colors: [
    '#5791FF', '#dc82cf', '#aa7be6', '#AF6288', '#985f84', '#e0b0be', '#8666af', '#C9767B',
  ],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Annual Economic Occupancy",
    align: "center",
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#fff", "transparent"], // takes an array which will be repeated on columns
      // opacity: 0.5,
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
    ],
  },
  yaxis: {
    min: 75,
    max: 100,
    tickAmount: 5,
    labels: {
      formatter: (value) => value.toFixed(0) + "%",
    },
  },
  legend: {
    show: false,
  },
};

const topleftdata = [
  {
    name: "T12",
    data: [
      0.9047345553917957, 0.8400862042495701, 0.9259715348413542,
      0.9803950204949141, 0.8525809169576438, 0.8908750569303173,
      0.8500145154086647, 0.9545742146791723, 0.8902859163316956,
      0.8770152597885962, 0.8578331100193539, 0.8637612029179694,
    ],
  },
  {
    name: 2019,
    data: [
      0.9304147476050111, 0.9461103690739376, 0.9551572035828146,
      0.9978460604220434, 0.984074313040838, 0.9757513283740701,
      0.9486052553223165, 0.9694618133095132, 0.929422956677088,
      0.930984740211404, 0.9093553669793063, 0.9353317701354772,
    ],
  },
  {
    name: 2018,
    data: [
      0.9304147476050111, 0.8261103690739376, 0.9551572035828146,
      0.9978460604220434, 0.844074313040838, 0.8957513283740701,
      0.9486052553223165, 0.9694618133095132, 0.929422956677088,
      0.930984740211404, 0.9093553669793063, 0.9353317701354772,
    ],
  },
];
function TopLeft() {
  let series = topleftdata.map((a) => ({
    name: a.name,
    data: a.data.map((i) => (i * 100).toFixed(1)),
  }));

  return (
    <React.Fragment>
      <div>
        <div className="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={350}
          />
        </div>
        <table className="table">
          <tbody>
            {series.map((tabledata, key) => (
              <tr>
                <th>
                  <div
                    className="dot"
                    style={{ backgroundColor: `${options.colors[key]}` }}
                  ></div>
                  {tabledata.name}
                </th>
                {tabledata.data.map((data) => (
                  <td>{data}%</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default TopLeft;
