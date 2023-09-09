import React from "react";
import ReactApexChart from "react-apexcharts";
import styles from "./SemiCircleGauge.module.scss";

function SemiCircleGauge() {
  const options = {
    chart: {
      type: "radialBar",
      offsetY: -20,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: "45%",
          background: "transparent",
          image: undefined,
          stroke: "#D1FADF",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "40px",
            fontWeight: "bold",
          },
        },
      },
    },
    colors: ["#20E647"], // Color of the gauge
    labels: ["Progress"], // Label for the gauge
  };

  const series = [50]; // Value for the gauge

  return (
    <div className={styles.semiCircleGauge}>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={380}
      />
    </div>
  );
}

export default SemiCircleGauge;
