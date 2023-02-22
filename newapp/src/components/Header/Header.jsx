import React from "react";
// import { PieChart } from "react-minimal-pie-chart";
import { Chart } from "react-google-charts";

function Header(props) {
  return (
    <div style={{ alignSelf: "center" }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export const data = [
  ["Task", "Hours per Day"],
  ["Study", 5],
  ["Eat", 2],
  ["Pet cats", 4],
  ["Social media", 3],
  ["Sleep", 10],
];

export const options = {
  title: "Daily Activities",
  is3D: true,
};

export default Header;
