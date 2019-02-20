import React, { Component } from 'react'
import { connect } from 'react-redux'

// 引用action方法
import { addOther } from '../../../redux/actions/otherActions';

class Home extends Component {

  handlerAddRedux(){
    this.props.addOther();
  }

  render() {
    const otherData=this.props.other.map((item,index)=>(
        <div key={index}>
            {item.name}
        </div>
    ))
    return (
      <div>
         <button onClick={this.handlerAddRedux.bind(this)}>添加redux</button>
         {otherData}
         
      </div>
    )
  }
}
const mapState=state=>({
    other:state.other.items
})
export default connect(mapState,{ addOther })(Home)
