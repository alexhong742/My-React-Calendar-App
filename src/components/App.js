import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Months from "./Months"
import axios from "axios"
import Days from './days'
class App extends Component {
    state = {
        days : ['Sunday','Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'Semptember', 'October', 'November', 'December'],
        summaries: [],
        text: "",
        edittor: true,
    }
    handler = (e) => {
        // axios.post("/", {summary:this.state.text}).then((res) => {
        //     this.state.summaries.push()
        //     // console.log(res.summary)
        // })
    }
    handlerClick = (e) => {
        this.setState({edittor:!this.state.edittor})
        axios.get('/redirect').then((res) => {
            this.setState({summaries:res.data})
        })
    }
    render()  { 
        document.body.style.backgroundColor = '#65F2FB';
        console.log(this.state.edittor,"llieieine")
        console.log(this.state.summaries,"summmssssss")
        let date = new Date();
        let dates = date.getFullYear()
        let year = []
        for(let i = 1; i < 13; i++){
            let months = <Months key={i} days={this.state.days} months={this.state.months[i-1]} date={date}
             edittor={this.state.edittor} summaries={this.state.summaries} handlerC={this.handlerClick}/>
            year.push(months)
        }
        if(!this.state.edittor){
            document.body.style.backgroundColor = '#014258';
            let arr = [];
            console.log(this.state.summaries[this.state.summaries.lenght-1])
            for(let i = 0; i < this.state.summaries.length; i++){
                arr[i] = <p style={{textAlign: 'center', alignSelf: 'stretch'}}>{dates} || {this.state.summaries[i].creat}, {this.state.summaries[i].created}: <br/> {this.state.summaries[i].summary.toString()}</p>
            }
            return(
                <div style={{backgroundColor:'#014258', color:'#FFF000', margin:'auto',}}>
                    <h1 style={{textAlign: 'center', alignSelf: 'stretch'}}>ALEX'S CALENDAR</h1>
                   <div style={{alignSelf: 'stretch', margin: 'auto', position:'center', display: 'inlineBlock',
                    height: 'flex', width: '300px', border: '3px solid black'}}> {arr} </div>
                    {/* create a delete and patch input field */}
                </div>
            )
        } else{
        return ( 
            <div className='yeard'> 
            <h1>ALEX'S CALENDAR</h1>
                {dates}
            <br/>
                {year}
            </div>
        )
    }
}
}
export default App