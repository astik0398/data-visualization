import React from 'react'
import Sector from '../Charts/Sector'
import Likelihood from '../Charts/Likelihood'
import Relevance from '../Charts/Relevance'
import BubbleChart from '../Charts/BubbleChart'

const HomePage = () => {

  return (
    <>
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <div style={{width:'60%', border:'1px solid #e0dfe2',height:'550px', margin:'10px', padding:'10px', borderRadius:'10px', backgroundColor:'white'}}>
        <Sector/>
        </div>

        <div style={{border:'1px solid #e0dfe2',margin:'10px',height:'550px', padding:'10px', width:'31%', borderRadius:'10px', backgroundColor:'white'}}>
            <Likelihood/>
        </div>
    </div>
    <div style={{border:'1px solid #e0dfe2',margin:'auto', marginTop:'20px', marginBottom:'20px', padding:'10px', width:'95%', borderRadius:'10px', backgroundColor:'white'}}>
            <Relevance/>
        </div>
        <div style={{border:'1px solid #e0dfe2',margin:'auto', marginTop:'30px',marginBottom:'20px', padding:'10px', width:'95%', borderRadius:'10px', backgroundColor:'white'}}>
          <BubbleChart/>
        </div>
    </>
  )
}

export default HomePage