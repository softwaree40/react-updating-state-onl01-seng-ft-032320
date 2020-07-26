// Code ClickityClick Component Here
import React, { Component } from 'react'

export default class ClickityClick extends Component {

    constructor(){
     super()
     //Define initial state
     this.state ={
        hasBeenClicked: false,
        currentTheme: 'blue',
     }


    }
   //Update state
   handleUpadate=()=>{

    this.setState({
        hasBeenClicked: true,
        currentTheme: "Yelow"
    })
   }
    render() {
        return (
            <div>
                <button onClick={this.state.hasBeenClicked}></button>
            </div>
        )
    }
}
