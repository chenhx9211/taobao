import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Index from './container/Index'
import Weitao from './container/Weitao'
import ShoppingCart from './container/ShoppingCart'
import My from './container/My'

import './styles/index/index.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
      
          <Route path="/weitao" component={Weitao} />
          <Route path="/shoppingCart" component={ShoppingCart} />
          <Route path="/my" component={My} />
          {/* 首页 */}
          <Route path="/" component={Index} />
      </Switch>  
        
          <Route render={({match, location}) => {
          return ['/weitao','/shoppingCart','/my','/'].includes(location.pathname) ?
                (  
                <div className="navTab">
                <li>
                  <Link to="/"><div></div>首页</Link>
                </li>
                <li>
                  <Link to="/weitao"><div></div>微淘</Link>
                </li>
                <li>
                  <Link to="/shoppingCart"><div></div>购物车</Link>
                </li>
                <li>
                  <Link to="/my"><div></div>我的淘宝</Link>
                </li>
              </div>)
              : null
            }
          } ></Route>


      </div>
      
      </Router>
    );
  }
}

export default App