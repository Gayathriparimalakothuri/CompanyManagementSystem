import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Prevbutton = ({destination='/'}) =>{
    const prevbutton = {
        color: 'blueviolet',
        fontSize: '30px',
        margin: '15px'
      }
    return(
        <div style={prevbutton}>
            <Link to ={destination}>  <FaAngleDoubleLeft/></Link>   
        </div>
    )
}

export default Prevbutton