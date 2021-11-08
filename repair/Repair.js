import React from 'react'
import { FaAws,FaAudible, } from 'react-icons/fa';
import { FaAirFreshener } from "react-icons/fa";
import '../repair/Repair.css'

const Repair = () => {
    return (
        <div className="cont">
        <div className="repair">
        {/* <FaAirFreshener/> */}
        <h5 className="hel" > <FaAirFreshener className="icon"/> AC services</h5>
        <h5 className="hel" >  <FaAudible className="icon"/> Home Cleaning  </h5>
        <h5 className="hel" > <FaAws className="icon"/> Salon at Home</h5>
        <h5 className="hel" >  <FaAudible className="icon"/> Virus Fumigation</h5>  
        <h5 className="hel" > <FaAws className="icon"/> Plumbing</h5>
        <h5 className="hel" >  <FaAudible className="icon"/> Electrical  </h5>
        <h5 className="hel" > <FaAws className="icon"/> Appliances</h5>
        <h5 className="hel" > <FaAws className="icon"/> Carpentry</h5>
        <h5 className="hel" > <FaAws className="icon"/> Packers & Mover</h5>
       <h5>  <FaAudible className="icon"/> Pest Control </h5>
          </div>
          </div>
    )
}

export default Repair;
