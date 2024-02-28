import React, { useEffect, useState } from "react";
import data from "../db.json";
import { Bubble } from "react-chartjs-2";

const BubbleChart = () => {
  const newData = data.data.slice();
  const [allData, setAllData] = useState([]);
  const colors = [
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(255, 159, 64)",
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(128, 0, 0)",
    "rgb(0, 128, 0)",
    "rgb(0, 0, 128)",
    "rgb(128, 128, 0)",
    "rgb(128, 0, 128)",
    "rgb(0, 128, 128)",
  ];

  useEffect(() => {
    let obj = {};
    let arr = [];
    let d = [];

    for (let i = 0; i < newData.length; i++) {
      if (newData[i].likelihood != "" && newData[i].relevance != "") {
        if (obj[newData[i].pestle] == null) {
          obj[newData[i].pestle] = [
            {
              x: newData[i].likelihood + (Math.random() * 10),
              y: newData[i].relevance + (Math.random() * 10),
              r: newData[i].likelihood + newData[i].relevance + (Math.random() * 4),
            },
          ];
        } else {
          obj[newData[i].pestle].push({
            x: newData[i].likelihood + (Math.random() * 10),
            y: newData[i].relevance + (Math.random() * 10),
            r: newData[i].likelihood + newData[i].relevance + (Math.random() * 4),
          });
        }
      }
    }

    console.log(obj);
    let i = 0;
    for (let key in obj) {
      if (key != "") {
        // arr.push({key: key, array: obj[key]})
        d.push({
          label: key,
          data: obj[key],
          backgroundColor: colors[i],
        });
      }
      i++;
    }

    console.log(d);
    setAllData(d);
    console.log(allData);
  }, []);

  const state = {
    datasets: allData,
  };
  return (
    <div>
          <div style={{marginLeft:'5px'}}>
      <h2 style={{textAlign:'left', marginTop:'0px', color:'#5d5a68'}}>Pestle</h2>
      <p style={{textAlign:'left',  marginTop:'-20px' ,color:'#e0cffe'}}>By Relevance & Likelihood</p>
      </div>
      <Bubble data={state} />
    </div>
  );
};

export default BubbleChart;
