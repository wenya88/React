import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'

// 引用组件
import Index from './static/pages/index'
import Login from './static/pages/login'

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
              <div>
                <Route exact path="" component={Login} />
                <Route path="/index" component={Index} />
              </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
