import React, { useState } from 'react'

const ToggleBackgroundColor = () => {

    const [backgroundColor,setBackgroundColor] = useState("white");
    const [color,setColor]= useState("#1b1b1b");
    const [buttonStyle,setButtonStyle] = useState("white");



    const handleClick = ()=>{

       setBackgroundColor(backgroundColor === "white"?"#1b1b1b":"white")
       setColor(color === "#1b1b1b"?"#ffa31a":"#1b1b1b");
       setButtonStyle(backgroundColor === "white"?"#1b1b1b":"white")
    }
    
  return (
    <div style={{backgroundColor,color:color}}>
        <button onClick={handleClick}style={{buttonStyle,color:color,
            border:`2px solid ${color}`
        }}>{backgroundColor == "#1b1b1b" ? "Black Theme":"White Theme"}</button>

        <section className='content'>
            <h1>Welcome To a <br/>
            Real World</h1>

        </section>
    </div>
  )
}

export default ToggleBackgroundColor