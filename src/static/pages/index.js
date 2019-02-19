import React, { Component } from 'react'


import HeaderNav from './menu/headNav';
import MainContent from './menu/content';

 class Index extends Component {
    
    componentDidMount(){
        this.routerDefend();
    }

    //   导航守卫
    routerDefend(){
        if(!sessionStorage.getItem("TOKEN")){
            this.props.history.push("")
        }
    }
    render() {
        return (
            <div>
                <HeaderNav history={this.props.history}/>
                <MainContent />
            </div>
        )
    }
}
export default Index
