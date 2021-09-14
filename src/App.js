import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import Bootcamp from './components/bootcamps/bootcamp';
import CreateBootcamp from './components/bootcamps/createBootcamp';
import BootcampDetails from './components/bootcamps/bootcampDetails';

class App extends Component {
    render() {
    return (
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/bootcamp' component={Bootcamp} />
                <Route path='/createbootcamp' component={CreateBootcamp} />
                <Route path='/bootcamps/:id' component={BootcampDetails} />
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
