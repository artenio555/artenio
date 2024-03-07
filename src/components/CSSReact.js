import React from "react";
import './style.css'

const CSSReact = () =>{
    let styleText ={
        frontStyle: "italic",
        color: "#00ff00"
    }
    return(
        <div>
            <h1 style={{color:"red" , fontSize: "50px"}}>CSS inline</h1>
            <h2 style={styleText}>CSS inernel</h2>
            <h3 className="text"> CSS external</h3>

        </div>
    )
}
export default CSSReact