import * as React from 'react';
import './App.css';


import { PersonGroups } from './components/personGroups/personGroups.component';
import { Header } from './components/header/headerComponent';
import { Switch, Route } from 'react-router-dom';
import { PersonGroup } from './components/personGroup/personGroup.component';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          <Switch>            
              <Route exact={true} path='/' component={PersonGroups} />
              <Route path='/personGroups' component={PersonGroups} />
              <Route path='/personGroup/:id' component={PersonGroup} />              
          </Switch>
        </p>
      </div>
    );
  }
}

export default App;
