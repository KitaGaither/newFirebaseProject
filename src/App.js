import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import BootcampDetails from './components/bootcamps/bootcampDetails';
import BootcampList from './components/bootcamps/bootcampList';
import CreateBootcamp from './components/bootcamps/createBootcamp';

class App extends Component {
    render() {
    return (
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/bootcamp/:id' component={BootcampList} />
                <Route path='/bootcamp/:id' component={BootcampDetails} />
                <Route path='/create' component={CreateBootcamp} />
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
