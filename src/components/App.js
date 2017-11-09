import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Months from "./Months"
import axios from "axios"
import Days from './days'
import Sum from './summaries'
class App extends Component {
    state = {
        days : ['Sunday','Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'Semptember', 'October', 'November', 'December'],
        summaries: [],
        text: "",
        edittor: true,
    }
    handler = (e) => {
        this.setState({text:e.target.value})
    };
    toggler = (e) => {
        this.setState({edittor:!this.state.edittor})
    };
    refresh = () => {
        axios.get('/schedule').then((res) => {
            this.setState({summaries:res.data});
            // console.log('refreshed! ', summaries);
        })
    };
    handlerClick = (e) => {
        // we need to make sure that the database creates the record before we switch to the next view
        // check to see if database is asynchonously being updated after the user is redirected.
        axios.get('/schedule').then((res) => {
            this.setState({summaries:res.data});
            this.setState({edittor:!this.state.edittor});
        });
    };
    render()  { 
        document.body.style.backgroundColor = '#65F2FB';
        let date = new Date();
        let dates = date.getFullYear();
        let year = [];
        for(let i = 1; i < 13; i++){
            let months = <Months key={`Month${i}`} days={this.state.days} months={this.state.months[i-1]} date={date} text={this.state.text} handler={this.handler}
             edittor={this.state.edittor} summaries={this.state.summaries} handlerC={this.handlerClick}/>
            year.push(months)
        }
        if(!this.state.edittor){
            document.body.style.backgroundColor = '#014258';
            let arr = [];
            // console.log(this.state.summaries[this.state.summaries.length-1])
            for(let i = 0; i < this.state.summaries.length; i++){
                let summ = <Sum key={`Sum${i}`} number={i} sum={this.state.summaries} handler={this.handler} id={`id${i}`}
                 refresh={this.refresh}/>
                arr.push(summ)
            }
            return(
                <div style={{backgroundColor:'#014258', color:'#FFF000', margin:'auto',}}>
                    <h1 style={{textAlign: 'center', alignSelf: 'stretch'}}>
                    ALEX'S CALENDAR <br/> 
                    <input type='submit' value='Back to Calendar' float='right' onClick={this.toggler}/> <br/>
                    {dates}</h1>
                   <div style={{alignSelf: 'stretch', margin: 'auto', position:'center', display: 'inlineBlock',
                    height: 'flex', width: '300px', border: '3px solid black'}}> {arr} </div>
                </div>
            )
        } else{
            return ( 
                <div className='yeard'> 
                <h1>ALEX'S CALENDAR <br/> {dates} <br/> <input type='submit' value='View Schedule' float='right' onClick={this.handlerClick}/></h1>
                <br/>
                    {year}
                </div>
            );
        }
    }
};
export default App