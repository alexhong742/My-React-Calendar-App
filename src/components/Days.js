import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App.js'
class Days extends Component{
    state = {
        text: this.props.text,
    }
    handlerChange = (e) => {
        this.setState({text:e.target.value}) 
    }
    handler = (e) => {
        e.preventDefault()
        let data = {summary:this.state.text, created: this.props.date, creat: this.props.months, identifier: `${this.props.months}, ${this.props.date}`}
        axios.post("/", data)
        this.props.handlerC()
    }

    render() {
        console.log('this is a new test for props.handler', this.props.handler)        
        return (
        <td style={{height: '100px', width: '100px', border: '1px solid gray'}} className='day'>
           <form style={{margin:'auto',padding:'auto',fontColor:'#EDF2F4'}}>
                <textarea type='text' name='event' placeholder={this.props.date} value={this.state.text} onChange={this.handlerChange} 
                style={{color:'#EDF2F4', backgroundColor:'#014258', margin:'auto', height:'100px'}}/><br/>
                <input type='submit' value='Submit' onClick={this.handler}/>
            </form>
        </td>
        );
    }
}
export default Days;