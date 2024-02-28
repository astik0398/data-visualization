import React, { useEffect, useState } from 'react'
import data from '../db.json'
import { Bar, Bubble, Line, Pie, Radar } from 'react-chartjs-2'

const Relevance = () => {

    const allData = data.data.slice()
    const [newArr, setNewArr] = useState([])
    const [sector, setSector] = useState()
    const [relevance, setRelevance] = useState()
    const [z, setz] = useState([])
    const colors = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(255, 0, 0)',
        'rgb(0, 255, 0)',
        'rgb(0, 0, 255)',
        'rgb(255, 255, 0)',
        'rgb(255, 0, 255)',
        'rgb(0, 255, 255)',
        'rgb(128, 0, 0)',
        'rgb(0, 128, 0)',
        'rgb(0, 0, 128)',
        'rgb(128, 128, 0)',
        'rgb(128, 0, 128)',
        'rgb(0, 128, 128)'
    ];
    useEffect(()=> {
        let obj = {}
        let arr = []
        let sec = []
        let i =0

        for(let i=0; i<allData.length; i++){
            if(obj[allData[i].sector]==null){
                obj[allData[i].sector]=[allData[i].relevance]
            }
            else{
                obj[allData[i].sector].push(allData[i].relevance)
            }
        }

        for(let key in obj){
            console.log(key, obj[key]);
            if(key!=""){
                arr.push({
                    
                    label: key,
            backgroundColor: colors[i],
            fill: false,
            borderColor: colors[i],
            borderWidth: 1,
            data: obj[key],
            
                })
                i++
                // arr.push(key)
                sec.push(key)
            }
        }
        // setRelevance(relArr)
        setSector(sec)
        setz(arr)
        console.log(z);
    }, [])

    const state = {
        labels: sector,
        datasets: z

      }

  return (
    <div>
        <div style={{marginLeft:'5px'}}>
      <h2 style={{textAlign:'left', marginTop:'0px', color:'#5d5a68'}}>Relevance</h2>
      <p style={{textAlign:'left',  marginTop:'-20px' ,color:'#e0cffe'}}>By Sector</p>
      </div>
        <Bar options = {{
    scales: {
        x:{
            display:false
        }
    }
}} data = {state}/>
    </div>
  )
}

export default Relevance