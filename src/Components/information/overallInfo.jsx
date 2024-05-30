import React from "react";

//https://tw-elements.com/docs/react/data/charts/
import { TEChart } from "tw-elements-react";

const overallInfo = () => {
  return (
    <div className="w-full ">
      <div className="md:flex md:gird-col-2 md:gap-5 gap-10 items-center justify-between">
        <div className="md:w-2/3 w-full items-center md:p-5 sm:p-10 p-1">
          <div className="text-center text-primary ">
            <h2 className="text-2xl font-bold mb-2 underline">
              Monthly Disater Report 2024
            </h2>
            <h3 className="text-xl font-semibold  mb-3">May</h3>
          </div>
          <TEChart
            type="bar"
            data={{
              labels: [
                "Flood",
                "Landslides",
                "House Fire",
                "Droughts",
                "Heavy Rain",
                "Other",
              ],
              datasets: [
                {
                  label: "",
                  data: [30, 15, 62, 65, 61, 6],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255,99,132,1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false, // Hide the legend
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "#080707",
                  },
                },
                y: {
                  ticks: {
                    color: "#080707",
                  },
                },
              },
            }}
          />
        </div>

        <div className="md:w-1/3 w-full md:p-5 sm:p-10 p-1">
        <div className="text-center text-primary ">
            <h2 className="text-xl font-bold mb-2 underline">
              Province Wise Disaster Report
            </h2>
            <h3 className="text-lg font-semibold  mb-3">Flood</h3>
          </div>
          <TEChart
            type="doughnut"
            data={{
              datasets: [
                {
                  label: "Province Wise Disaster Report",
                  data: [2112, 2343, 2545, 3423, 2365, 1985, 987,230,456],
                  backgroundColor: [
                    "rgba(63, 81, 181, 0.5)",
                    "rgba(77, 182, 172, 0.5)",
                    "rgba(66, 133, 244, 0.5)",
                    "rgba(156, 39, 176, 0.5)",
                    "rgba(233, 30, 99, 0.5)",
                    "rgba(66, 73, 244, 0.4)",
                    "rgba(66, 133, 244, 0.2)",
                    "rgba(66, 90, 244, 0.4)",
                    "rgba(66, 133, 253, 0.2)",
                  ],
                },
              ],
              labels: [
                "Central",
                "Eastern",
                "North Central",
                "Northern",
                "North Western",
                "Sabaragamuwa",
                "Southern",
                "Uva",
                "Western",
              ],
            }}
            options={{
              plugins: {
                legend: {
                  position: "bottom", // Position the legend at the bottom
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default overallInfo;
