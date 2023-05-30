import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";

class BarDefault extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Total",
          data: this.props.series,
        },
      ],
      options: {
        colors: [
          ({ value, seriesIndex, w }) => {
            if (value === this.props.max) {
              return "#7356C0";
            }
            return "#B69EEA";
          },
        ],

        chart: {
          type: "bar",
          stacked: true,

          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
          foreColor: "#ffffff",
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            distributed: true,
            horizontal: this.props.horisontal,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],

        xaxis: {
          type: "number",
          categories: this.props.categories,
          labels: {
            show: this.props.xLabels,
            style: {
              // colors: ["#ffffff"],
              colors: "#7356C0",
              fontSize: "12px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
          },
        },
        yaxis: {
          type: "number",
          labels: {
            show: this.props.xLabels,
            style: {
              // colors: ["#ffffff"],
              colors: "#7356C0",
              fontSize: "12px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-yaxis-label",
            },
          },
        },

        legend: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
        /*title: {
          text: this.props.title,
          floating: true,
          //offsetY: 330,
          align: 'center',
          style: {
            color: '#8f9bb3'
          }
        }*/
      },
    };
    /*this.state = {
          
      series: [{
        name: 'Answers',
        data: this.props.series
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: [
              function ({ value, seriesIndex, w }) {
                return "#7356C0";
              },
            ],
          }
        },
        
        xaxis: {
          categories: this.props.categories,
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        
        },
        title: {
          text: this.props.title,
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      },
    
    
    };*/
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width={this.props.for === "location" ? 500 : "100%"}
          //height={}
          height={300}
        />
      </div>
    );
  }
}

export default BarDefault;
