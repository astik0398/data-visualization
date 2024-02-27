import React from 'react'
import Sector from '../Charts/Sector'
import Likelihood from '../Charts/Likelihood'
import Relevance from '../Charts/Relevance'

const HomePage = () => {

  return (
    <>
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <div style={{width:'60%', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px', margin:'10px', padding:'10px', borderRadius:'10px', backgroundColor:'white'}}>
        <Sector/>
        </div>

        <div style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',margin:'10px', padding:'10px', width:'31%', borderRadius:'10px', backgroundColor:'white'}}>
            <Likelihood/>
        </div>
    </div>
    <div>
            <Relevance/>
        </div>
    </>
  )
}

export default HomePage