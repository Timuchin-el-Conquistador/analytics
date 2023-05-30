import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

import "../../assets/css/apexcharts/index.css";

class Pie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: this.props.series,
      options: {
        labels: this.props.categories,
        legend: {
          show: this.props.labels
        },
        colors: ["#7356C0", "#3F2B89"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div
        id={`chart-survey`}
      >
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          height={this.props.show_categories ? 160 : 190}
          width={300}
        />
      </div>
    );
  }
}

export default Pie;
