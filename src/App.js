import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import Bootcamp from './components/bootcamps/bootcamp';
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
                <Route path='/bootcamp' component={Bootcamp} />
                <Route path='/createbootcamp' component={CreateBootcamp} />
                
                {/* <Route path='/bootcamps/1' component={BootstrapBootcamp} />
                <Route exact path='/bootcamp/2' component={ReactBootcamp} />
                <Route excat path='/bootcamp/3' component={ReactNativeBootcamp} />
                <Route exact path='/bootcamp/4' component={NodeBootcamp} /> */}
                <Route path='/bootcamps/:id' component={BootcampDetails} />
              </Switch>
            </div>
          </BrowserRouter>
    );
  }
}

export default App;
