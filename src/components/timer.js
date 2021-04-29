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
    
     console.log('time convert',this.state.s)
     
 }
 StartTime = ()=>{
     if(this.state.interval){
         return
     }
   const inter= setInterval(
        () => {
           this.setState({
               s: this.state.s + 1
           }) 
        },  1000
    )
    this.setState({
        interval:inter
    })
 }
 EvenTime=(e)=>{
    this.setState({ time: e.target.value }
    )
}
RessetTime=()=>{
    
    this.setState({
        h:0,
        m:0,
        s:0
    })
}
PauseTime =()=> {
    if(!this.state.interval) {
        return
    }
    clearInterval(this.state.interval)
    this.setState({
        interval: undefined
    })
}
 render() {
    console.log("time is",this.state.t);
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
       <h1 className="mr-4">{String(this.state.h).padStart(2,'0')}:</h1>
       <h1 className="mr-4">{String(this.state.m).padStart(2,'0')}:</h1>
       <h1 className="mr-4">{String(this.state.s).padStart(2,'0')}</h1>
       
       </div>
       <div className="box-item">
        <span className="mr-4">Heures</span>
       <span className="mr-4">Minutes</span>
       <span className="mr-4">Secondes</span>
       </div>
  <input onClick={this.RessetTime} type="button" value="Reset"/>
  <input onClick={this.StartTime} type="button" value="Start"/>
  <input onClick={this.PauseTime} type="button" value="Pause"/>
   </Container>
    )
   }
 }



export default Timer