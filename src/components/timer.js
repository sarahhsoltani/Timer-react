import React, { Component } from 'react'
import {Container} from "react-bootstrap"
import "./style.css"
class Timer extends Component {
 state = {
    time:0,
    h:0,
    m:0,
    s:0
 }
 convertTime=()=>{
     let t=this.state.time
     this.setState({
        h: Math.floor(t / 3600) ,
        m: Math.floor((t % 3600) / 60) ,
        s: t % 60
     })
 }
 EvenTime=(e)=>{
    this.setState({ time: e.target.value }
    )
console.log("time is",this.state.time);
}
 render() {
  return(
   <Container>
       <h1 className="mt-5 timer">Timer </h1>
     <div className="d-flex justify-content-around mt-5">
         <div >
         <div className="input-group w-100  mt-5">
            <span className="input-group-text" id="basic-addon1"><button className=" btn-small" onClick={this.convertTime}>convert</button></span>
            <input  onChange={this.EvenTime} type="text" className="form-control  py-3 " placeholder="type your time please" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
         </div>
         <div>
             <img src="./image/img.svg" className="ml-5" alt="..." />
         </div>
     </div>
       <div className="time">
       <h1>{this.state.h}:</h1>
       <h1>{this.state.m}:</h1>
       <h1>{this.state.s}</h1>
       </div>
   </Container>
    )
   }
 }



export default Timer