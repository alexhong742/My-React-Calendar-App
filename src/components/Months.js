import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Weeks from "./Weeks.js"
import Head from "./Header.js"
class Months extends Component{

    render(){  
      let month = []
      let header = ['Sunday','Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      for(let i = 1; i < 5; i++){
        let rowID = `row${i}`
        let weeks = <Weeks key={i} days={this.props.days} weekNumber={i} rowID={rowID} 
          edittor={this.props.edittor} summaries={this.props.summaries} handlerC={this.props.handlerC} months={this.props.months}/>
        month.push(weeks)
        }
      return(
        <div className="month">
          <table id="simple-board">
            <thead>
              <h3>{this.props.months}</h3>
            </thead>
            <tbody>
                <Head header={header} key="blahhah" style={{height: '100px', width: '100px', border: '1px solid grey'}}/>
              {month}
            </tbody>
          </table>
        </div>
      )
    }
}
export default Months;