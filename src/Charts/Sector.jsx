import { Radar, Bar, Scatter, Line, Doughnut } from 'react-chartjs-2'
import 'chart.js/auto';
import dataA from '../db.json'
import { useEffect, useState } from 'react';

function Sector() {

  // const [likelihood, setLikelihood] = useState(data.data.map((item)=> item.intensity))
  const [sector, setSector] = useState([])
  const [intensity, setIntensity] = useState([])
  const [date, setDate] = useState([])
  const [month, setMonth] = useState(null)
  const [showDate, setShowData] = useState(false)
  const [data, setDataA] = useState(dataA)

  useEffect(()=> {

    let arr = []
    let arr2 = []
    let dateArr = []

    if(month == 'last-month'){
      for(let i=data.data.length-1; i>=data.data.length-30; i--){
        if(data.data[i].sector != ''){
          arr.push(data.data[i].sector)
          setSector(arr)
          let d = data.data[i].published.split(" ")
          let fin = d.slice(0,3).join(" ")
          dateArr.push(fin)
          setDate(dateArr)
        }
      }
  
      for(let i=data.data.length-1; i>=data.data.length-30; i--){
        if(data.data[i].sector != ''){
          arr2.push(data.data[i].intensity)
        setIntensity(arr2)
        }
      }
    }
    else if(month == 'last-two-week'){
      for(let i=data.data.length-1; i>=data.data.length-15; i--){
        if(data.data[i].sector != ''){
          arr.push(data.data[i].sector)
         let d = data.data[i].published.split(" ")
          let fin = d.slice(0,3).join(" ")
          dateArr.push(fin)
          setDate(dateArr)
          setSector(arr)
        }
      }
  
      for(let i=data.data.length-1; i>=data.data.length-15; i--){
        if(data.data[i].sector != ''){
          arr2.push(data.data[i].intensity)
        setIntensity(arr2)
        }
      }
    }
    else{
      for(let i=0; i<data.data.length; i++){
        if(data.data[i].sector != ''){
          arr.push(data.data[i].sector)
          let d = data.data[i].published.split(" ")
          let fin = d.slice(0,3).join(" ")
          dateArr.push(fin)
          setDate(dateArr)
          setSector(arr)
        }
      }
  
      for(let i=0; i<data.data.length; i++){
        if(data.data[i].sector != ''){
          arr2.push(data.data[i].intensity)
        setIntensity(arr2)
        }
      }
    }
  }, [month])

  const state = {
    labels: date,
    datasets: [
      {
        label:'astik',
        backgroundColor:'red',
        fill: false,
        borderColor: 'red',
        borderWidth: 1,
        tension: 0.5,
        data: intensity,
        pointRadius: 0
      }
    ]
  }

  return (
    <div className="App">
      <div style={{marginLeft:'5px'}}>
      <h2 style={{textAlign:'left', marginTop:'0px', color:'#5d5a68'}}>Intensity</h2>
      <p style={{textAlign:'left',  marginTop:'-20px' ,color:'#e0cffe'}}>By Dates</p>
      </div>
      <div style={{marginLeft:'780px', marginTop:'-60px',  position: 'absolute', zIndex:'99999'}}>
      <select style={{ border:'1px solid #e0dfe2',  color: '#c9c4cf',height:'30px', width:'125px', borderRadius:'5px', padding:'5px', outline:'none'}}  onChange={(e)=> setMonth(e.target.value)}>
        <option value={''}>All Data</option>
        <option value={'last-month'}>Last Month</option>
        <option value={'last-two-week'}>Last Two Week</option>
      </select>
      </div>
      <div style={{ position:'relative'}}>
      <Line
          data={state}
          options={{
            plugins:{
                legend:{
                    display: false
                }
            },
            scales: {
                x: {
                    display: showDate
                }
            }
          }}
        />
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px'}}>
      <div><input type="checkbox" onChange={()=> setShowData(!showDate)}/></div>
      <div style={{marginTop:'-2px'}}><label ><b>Show Dates</b></label></div>
      </div>
    </div>
  );
}

export default Sector;
