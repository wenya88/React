import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

 class HeadNav extends Component {
  constructor(props){
      super(props);
      this.state={
          menuData:[
              {name:"首页",value:"home"},
              {name:"其他",value:"other"}
          ],
          nIndex:0,
          otherData:[]
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
  
//   获取最新props值
  componentWillReceiveProps(nextProps){
      this.setState({
        otherData:nextProps.other
      },_=>{
        console.log(this.state.otherData)
      })
      
  }

  handlerNindex(res){
     this.setState({nIndex:res.n})     
  }

  render() {
    const {menuData,nIndex,otherData} = this.state;
    const menu=menuData.map((item,index)=>(
        <span key={index} onClick={this.handlerNindex.bind(this,{n:index,val:item.value})}>
            <Link to={`/index/${item.value}`} className={index===nIndex?"headerNav_span showMenu":"headerNav_span"}>{item.name}</Link>
        </span>
    ))
    const other=otherData.map((item,index)=>(
        <div key={index}>
            reduxName:{item.name}
        </div>
    ))
    return (
        <div>
            <div className="headerNav">
                {menu}
            </div>
            {other}
        </div>
      
    )
  }
}
const mapState=state=>({
    other:state.other.items
})
export default connect(mapState)(HeadNav);
