import React,{ Component } from 'react'

class Mybutton extends Component{
    render() {
        return(
        <div class="button-div">
            <button class="calc-button" onClick={this.props.calculateFunction}>Calculate</button>
            <button class="clear-button" onclick="calcValue()">Clear</button>
        </div> 
        )
    }
}

export default Mybutton
