import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './views/home'
import DemoUseState from './views/demo-useState'
import DemoUseEffect from './views/demo-useEffect'
import { DemoUseComponent, RandomColor } from './views/demo-useComponent'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/demo-userState" exact component={DemoUseState} />
            <Route path="/demo-userEffect" exact component={DemoUseEffect} />
            <Route path="/demo-useComponent" exact component={DemoUseComponent} />
            <Route path="/demo-useComponent1" exact component={RandomColor} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;