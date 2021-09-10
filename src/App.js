import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import CurrentBootcamps from './components/bootcamps/currentBootcamps';
import CreateBootcamp from './components/bootcamps/createBootcamp';

class App extends Component {
    render() {
    return (
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/currentbootcamps/:id' component={CurrentBootcamps} />
                <Route path='/create' component={CreateBootcamp} />
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
