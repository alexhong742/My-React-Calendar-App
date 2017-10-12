import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App.js'
class Sum extends Component{
    state = {text: ""}
    handleS = (e) => {
      this.setState({text:e.target.value}) 
      console.log(this.state.text)
    }
    delete = () => {
      axios.delete(`/${this.props.sum[this.props.number].creat}, ${this.props.sum[this.props.number].created}`)
      this.props.delete()
    };
    patch = (e) => {
      e.preventDefault()
      axios.patch(`/${this.props.sum[this.props.number].creat}, ${this.props.sum[this.props.number].created}`,{summary: this.state.text})
      this.props.patch()
    }
    render() {
      return(
      <p style={{textAlign: 'center', alignSelf: 'stretch'}}> {this.props.sum[this.props.number].creat}, {this.props.sum[this.props.number].created}: <br/> 
      {this.props.sum[this.props.number].summary.toString()}<br/>
      <form style={{margin:'auto',padding:'auto',fontColor:'#EDF2F4'}}>
      <textarea type='text' name='event' placeholder='edit' value={this.state.text} onChange={this.handleS} 
      style={{color:'#EDF2F4', backgroundColor:'#014258', margin:'auto', height:'20px'}}/>
      <br/>
      <input type='submit' value='Edit' onClick={this.patch}/>
      </form>
      <input type='submit' value='Finished' onClick={this.delete}/>
      
       </p>
        );
    }
}
export default Sum;