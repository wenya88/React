import React, { Component } from 'react';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
       if(sessionStorage.getItem("TOKEN")){
            this.props.history.push("/index")
       }
    }

    handlerLogin(){
        sessionStorage.setItem("TOKEN","DEMO");
        this.props.history.push("/index")
    }
    render() {
        return (
        <div>
            <button onClick={this.handlerLogin.bind(this)}>登陆</button>
        </div>
        )
    }
}
export default Login
