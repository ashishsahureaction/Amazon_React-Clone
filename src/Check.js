import React from 'react'
import { useState } from 'react';

function Check() {
    const [color,setColor]= useState("red")
    const changeColur=()=>{setColor("green")}
    return (
        <div>
       
        <button onClick={changeColur}>Change{color}</button>
      
        </div>
    )
}

export default Check
