import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class HeadNav extends Component {
  constructor(props){
      super(props);
      this.state={
          menuData:[
              {name:"首页",value:"home"},
              {name:"其他",value:"other"}
          ],
          nIndex:0
      }
  }

  componentWillMount(){
      const { menuData } = this.state;
      const path = this.props.history.location.pathname.slice(this.props.history.location.pathname.lastIndexOf('/')+1);
      menuData.map((item,index)=>{
          if(path===item.value){
            this.setState({nIndex:index})
          }
          return index;
      })
  }

  handlerNindex(res){
     this.setState({nIndex:res.n})     
  }

  render() {
    const {menuData,nIndex} = this.state;
    const menu=menuData.map((item,index)=>(
        <span key={index} onClick={this.handlerNindex.bind(this,{n:index,val:item.value})}>
            <Link to={`/index/${item.value}`} className={index===nIndex?"headerNav_span showMenu":"headerNav_span"}>{item.name}</Link>
        </span>
    ))
    return (
      <div className="headerNav">
          {menu}
      </div>
    )
  }
}
export default HeadNav;
