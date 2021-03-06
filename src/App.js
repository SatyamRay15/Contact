import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Components/contacts/Contacts";
import Header from "./Components/layout/Header";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";
import Test from "./Components/test/Test";

import { Provider } from "./Context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddContact from "./Components/contacts/AddContact";
import EditContact from "./Components/contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className='App'>
            <Header branding='Contact Manager' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact/add' component={AddContact} />
                <Route exact path='/contact/edit/:id' component={EditContact} />
                <Route exact path='/test' component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
