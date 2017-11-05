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
        let weeks = <Weeks key={`Week${i}`} days={this.props.days} weekNumber={i} rowID={i} handler={this.props.handler} text={this.props.text} 
          edittor={this.props.edittor} summaries={this.props.summaries} handlerC={this.props.handlerC} months={this.props.months}/>
        month.push(weeks)
        }
      return(
        <div className="month">
          <table id="simple-board" style={{marginBottom: '20px'}}>
            <thead style={{fontWeight: 'bold', fontSize: '22px'}}>{this.props.months}</thead>
            <tbody key={this.props.key}>
                <Head header={header} key={this.props.key} style={{height: '100px', width: '100px', border: '1px solid grey'}}/>
              {month}
            </tbody>
          </table>
        </div>
      )
    }
}
export default Months;