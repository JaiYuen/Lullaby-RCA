import React, { Component } from 'react';
import './App.css';
import { Provider } from 'mobx-react';
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import WhatsNew from './pages/WhatsNew/Index';
import rootStore from './store/rootStore';
import LayOut from './component/LayOut';

class App extends Component {
  render() {
    return (
      <div className="App">
 <Provider {...rootStore}>
  <HashRouter>
    <div>
      <Route exact path="/" render={() => <Redirect to="/WhatsNew" />} />
      <Switch>
        <Route path="/WhatsNew" component={WhatsNew}/>
      </Switch>
    </div>
  </HashRouter>
  </Provider>
      </div>
    );
  }
}

export default App;
