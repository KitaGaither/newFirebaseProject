import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import Bootcamps from './components/bootcamps/bootcamps';
import CreateBootcamp from './components/bootcamps/createBootcamp';
import BootcampDetails from './components/bootcamps/bootcampDetails';
import BootstrapBootcamp from './components/bootcamps/bootstrapBootcamp';
import ReactBootcamp from './components/bootcamps/reactBootcamp';
import ReactNativeBootcamp from './components/bootcamps/reactNativeBootcamp';
import NodeBootcamp from './components/bootcamps/nodeBootcamp';

class App extends Component {
    render() {
    return (
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/bootcamps' component={Bootcamps} />
                <Route path='/createbootcamp' component={CreateBootcamp} />
                <Route path='/bootcamps/bootcampdetails' component={BootcampDetails} />
                <Route path='/bootcamps/bootstrapbootcamp' component={BootstrapBootcamp} />
                <Route path='/bootcamps/reactbootcamp' component={ReactBootcamp} />
                <Route path='/bootcamps/reactnativebootcamp' component={ReactNativeBootcamp} />
                <Route path='/bootcamps/nodebootcamp' component={NodeBootcamp} />
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
