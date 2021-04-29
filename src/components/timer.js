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
             s: this.state.s + 1,
           
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
    
  return(
   <Container className="timee text-center  p-5 mt-5">
       <h1 className="mt-2 timer">Type your Time please  <i class="far fa-grin-hearts"></i> </h1>
     <div className="text-center ">
         <div >
         <div className="input-group w-50  input-time mt-5 ml-5">
            <span className="input-group-text spann" id="basic-addon1"><button className=" btn-small" onClick={this.convertTime}>convert</button></span>
            <input  onChange={this.EvenTime} type="text" className="form-control  py-4 " placeholder="type your time please" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
         </div>
       
     </div>
       <div className="time text-center ">
       <h1 className="mr-4">{String(this.state.h).padStart(2,'0')}:</h1>
       <h1 className="mr-4">{String(this.state.m).padStart(2,'0')}:</h1>
       <h1 className="mr-4">{String(this.state.s).padStart(2,'0')}</h1>
       
       </div>
       <div className="box-item ">
        <span className="mr-4">Heures</span>
       <span className="mr-4">Minutes</span>
       <span className="mr-4">Secondes</span>
       </div>
        <div className="events mt-4">
        <button onClick={this.RessetTime}  className="btn event">Reset <i class="fas fa-undo-alt"></i> </button>
        <button onClick={this.StartTime}    className="btn event">Start <i class="fas fa-play"></i></button>
        <button onClick={this.PauseTime}   className="btn event">Pause <i class="fas fa-pause"></i></button> 
        </div>
   </Container>
    )
   }
 }



export default Timer