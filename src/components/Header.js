import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Months from "./Months"

class Head extends Component {
   
    render()  {
        let arr = []
        for(let i = 0; i < this.props.header.length; i++){
            let divsd = <td key={`Week${i}`}>{this.props.header[i]}</td>
            arr.push(divsd)
        }
        return ( 
            <tr className='head' key='fahfsf'>
                {arr}
            </tr>
        )
    }
}
export default Head