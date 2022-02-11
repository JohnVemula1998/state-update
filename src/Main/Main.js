import React, { Component } from "react";
import "./Main.css"

class Main extends Component{
    constructor() {
        super();
        this.state={
            img: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80"
        }
    }
    Friends = () => {
        this.setState({img:"https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"})
    }
    Family = () =>{
        this.setState({img:"https://images.unsplash.com/photo-1478061653917-455ba7f4a541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZhbWlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"})
    }
    render(){
        return(
            <div className="container">
                <img className="image" src={this.state.img}/>
                <div>
                    <button onClick={this.Friends}>Friends</button>
                <button onClick={this.Family}>Family</button></div>
            </div>
        )
    }
}
export default Main;