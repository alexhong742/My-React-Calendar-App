import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App.js'
class Sum extends Component{
    state = {text: ""}
    handleS = (e) => {
      this.setState({text:e.target.value}) 
    }
    delete = () => {
      axios.delete(`/${this.props.sum[this.props.number].creat}, ${this.props.sum[this.props.number].created}`)
      .then(() => {
        // console.log('deleted')
        this.props.refresh();
      });
    };
    patch = (e) => {
      e.preventDefault()
      // we need this here with the setState txt = "" because the default will send users back to calendar
      axios.patch(`/${this.props.sum[this.props.number].creat}, ${this.props.sum[this.props.number].created}`,{summary: this.state.text})
      .then(() => this.props.refresh());
      // patch request takes 2 arguments a route/params that a server is listening for, and what you want to update that value to
      // patch modifies while PUT replaces the entire data element
      this.setState({text: ""});
    }
    render() {
      return(
      <p style={{textAlign: 'center', alignSelf: 'stretch'}}> {this.props.sum[this.props.number].creat}, {this.props.sum[this.props.number].created}: <br/> 
      {this.props.sum[this.props.number].summary.toString()}<br/>
      <form style={{margin:'auto',padding:'auto',fontColor:'#EDF2F4'}}>
      <textarea type='text' name='event' placeholder='edit' value={this.state.text} onChange={this.handleS} 
      style={{color:'#EDF2F4', backgroundColor:'#014258', margin:'auto', height:'40px'}}/>
      <br/>
      <input type='submit' value='Edit' onClick={this.patch}/>
      </form>
      <input type='submit' value='Finished' onClick={this.delete}/>
      
       </p>
        );
    }
}
export default Sum;