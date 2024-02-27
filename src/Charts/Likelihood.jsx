import React, { useEffect, useState } from "react";
import dataA from "../db.json";
import { Doughnut, Line, Pie, Radar } from "react-chartjs-2";

const Likelihood = () => {
  console.log(dataA);
  const [allData, setAllData] = useState([]);
  const data = dataA.data.slice();
  console.log(data);

  useEffect(() => {
    let topData = data.sort((a, b) => b.likelihood - a.likelihood);
    console.log(topData);
    let arr = [];
    for (let i = 0; i < topData.length; i++) {
      if (arr.length < 5 && topData[i].country != "") {
        arr.push(topData[i]);
      }
    }
    setAllData(arr);
    console.log(allData);
  }, []);

  const state = {
    labels: allData?.map((item) => item.country),
    datasets: [
      {
        backgroundColor: [
          "red",
          "rgb(63, 255, 252)",
          "yellow",
          "green",
          "purple",
        ],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
        data: allData?.map((item) => item.likelihood),
      },
    ],
  };

  return (
    <div>
      {allData.length > 0 && (
        <div>
          <Radar
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
               elements: {
      line: {
        borderWidth: 1
      }
    },
    scales: {
        r: {
    pointLabels: {
        display: true // Hides the labels around the radar chart
    },
    ticks: {
        display: false // Hides the labels in the middel (numbers)
    }
}
    }
            }}
            data={state}
          />
        </div>
      )}
    </div>
  );
};

export default Likelihood;
