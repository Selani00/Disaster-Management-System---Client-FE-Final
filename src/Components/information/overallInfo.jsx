import { useEffect, useState } from "react";
import { TEChart } from "tw-elements-react";
import axios from "axios";
import moment from "moment";

const overallInfo = () => {
  const [monthlyData, setMonthlyData] = useState({});
  const [provinceData, setProvinceData] = useState({});
  const [selectedDisaster, setSelectedDisaster] = useState(null);

  const fetchDisasterData = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/reports/allReports");
      const previousMonth = moment().subtract(1, 'months').format("MMMM"); // Get previous month
      const filteredData = response.data.filter(item => moment(item.createdDate).format("MMMM") === previousMonth);

      const disasterCount = {};
      const provinceCount = {};

      filteredData.forEach(item => {
        // Count disaster types
        disasterCount[item.disasterType] = (disasterCount[item.disasterType] || 0) + item.affectedCount;

        // Count provinces for selected disaster type
        if (!provinceCount[item.disasterType]) {
          provinceCount[item.disasterType] = {};
        }
        provinceCount[item.disasterType][item.disasterLocation] = (provinceCount[item.disasterType][item.disasterLocation] || 0) + item.affectedCount;
      });

      setMonthlyData(disasterCount);
      setProvinceData(provinceCount);

      // Set default selected disaster type to the one with the maximum affected count
      const maxDisasterType = Object.keys(disasterCount).reduce((a, b) => disasterCount[a] > disasterCount[b] ? a : b);
      setSelectedDisaster(maxDisasterType);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDisasterData();
  }, []);

  const handleBarClick = (elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const disasterType = Object.keys(monthlyData)[index];
      setSelectedDisaster(disasterType);
    }
  };

  const barData = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        label: "",
        data: Object.values(monthlyData),
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
  };

  const pieData = selectedDisaster ? {
    datasets: [
      {
        label: "Province Wise Disaster Report",
        data: Object.values(provinceData[selectedDisaster]),
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
    labels: Object.keys(provinceData[selectedDisaster]),
  } : null;

  return (
    <div className="w-full">
      <div className="md:flex md:gird-col-2 md:gap-5 gap-10 items-center justify-between">
        <div className="md:w-2/3 w-full items-center md:p-5 sm:p-10 p-1">
          <div className="text-center text-primary">
            <h2 className="text-2xl font-bold mb-2 underline">
              Monthly Disaster Report 2024
            </h2>
            <h3 className="text-xl font-semibold mb-3">{moment().subtract(1, 'months').format("MMMM")}</h3>
          </div>
          <TEChart
            type="bar"
            data={barData}
            options={{
              plugins: {
                legend: {
                  display: false,
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
              onClick: (_, elements) => handleBarClick(elements),
            }}
          />
        </div>

        {selectedDisaster && (
          <div className="md:w-1/3 w-full md:p-5 sm:p-10 p-1">
            <div className="text-center text-primary">
              <h2 className="text-xl font-bold mb-2 underline">
                Province Wise Disaster Report
              </h2>
              <h3 className="text-lg font-semibold mb-3">{selectedDisaster}</h3>
            </div>
            <TEChart
              type="doughnut"
              data={pieData}
              options={{
                plugins: {
                  legend: {
                    position: "bottom",
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default overallInfo;
