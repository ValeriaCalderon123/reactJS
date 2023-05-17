 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 
 
 class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
            age:24
        }
    }

    render() {
        return (
            <div>
                <h1>Aqui estoy dentro de render {this.props.name}</h1>
                <h2>Aqui estoy con {this.state.age}</h2>
                <div>
                    <button onClick = {this.birtday}>
                        SUMA 1
                    </button>
                </div>
            </div>
        );
    }

    birtday = () =>{
        this.setState((prevState)=>(
            {
                age: prevState.age + 1
            }
        ))
    }
 }
 
 
 Greeting.propTypes = {
    name: PropTypes.string,
 };
 
 
 export default Greeting;
 