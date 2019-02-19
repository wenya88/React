import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '../views/home';
import Other from '../views/other'
class Content extends Component {
  render() {
    return (
      <div>
         <Route exact path="/index" component={Home}/>
         <Route path="/index/home" component={Home} />
         <Route path="/index/other" component={Other}/>
      </div>
    )
  }
}
export default Content
