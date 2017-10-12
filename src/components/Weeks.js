import React, { Component } from "react"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Days from "./Days.js"
class Weeks extends Component{
    handler = () => {
    }
    render(){
      let week = []
      let num = 7*(this.props.weekNumber-1)
      for(let i = 1; i < 8; i++){
        let day = <Days key={`Days${i}`} days={this.props.days[i-1]} date={i+num} months={this.props.months} handler={this.props.handler} text={this.props.text}
          dayID={`day${i}`} edittor={this.props.edittor} summaries={this.props.summaries} handlerC={this.props.handlerC}/>
        week.push(day)
      }
      return(
        <tr className="week">
          {week}
        </tr>
      )
    }
}
export default Weeks;