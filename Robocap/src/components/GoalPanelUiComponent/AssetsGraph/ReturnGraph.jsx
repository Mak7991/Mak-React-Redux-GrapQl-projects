import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./TotalGraph.scss";
import { data } from "../../../assets/dummyData/dummy";

const options = {
  title: {
    text: "Total Managed Assets",
  },
  rangeSelector: {
    selected: 1,
  },
  series: [
    {
      data: data,
      type: "areaspline",
      threshold: null,
      tooltip: {
        valueDecimals: 2,
      },
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, Highcharts.getOptions().colors[0]],
          [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get("rgba")],
        ],
      },
    },
  ],
};

const ReturnGraph = () => (
  <div className="return-chart">
    <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />
  </div>
);

export default ReturnGraph;
