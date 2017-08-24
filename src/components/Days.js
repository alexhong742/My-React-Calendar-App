import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App.js'
class Days extends Component{
    state = {
        text: "",
        date: this.props.date
    }
    handlerClik = (e) => {
        this.setState({text:e.target.value}) 
    }
    handler = (e) => {
        e.preventDefault()
        let data = {summary:this.state.text, created: this.props.date, creat: this.props.months}
        axios.post("/", data)
        this.props.handlerC()
    }

    render() {
        return (
        <td style={{height: '100px', width: '100px', border: '1px solid gray'}} className='day'>
           <form style={{margin:'auto',padding:'auto',fontColor:'#EDF2F4'}}>
                <textarea type='text' name='event' placeholder={this.props.date} value={this.state.text} onChange={this.handlerClik} 
                style={{color:'#EDF2F4', backgroundColor:'#014258', margin:'auto', height:'100px'}}/><br/>
                <input type='submit' value='Submit' onClick={this.handler}/>
            </form>
        </td>
        );
    }
}
export default Days;