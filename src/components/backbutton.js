import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Backbutton = ({destination='/companylist'}) =>{
    const backbutton = {
        color: 'blue',
        fontSize: '30px',
        margin: '5px'
      }
    return(
        <div style={backbutton}>
            <Link to ={destination}>  <FaArrowLeft/></Link>   
        </div>
    )
}

export default Backbutton