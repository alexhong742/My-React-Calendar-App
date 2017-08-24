import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Months from "./Months"

class Head extends Component {
   
    render()  {
        let arr = []
        for(let i = 0; i < 11; i++){
            let divsd = <td>{this.props.header[i]}</td>
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