import * as React from 'react';
import './App.css';

import { PersonGroups } from './components/personGroups/personGroups.component';
import { Header } from './components/header/headerComponent';
import { Switch, Route } from 'react-router-dom';
import { PersonGroup } from './components/personGroup/personGroup.component';
import { PersonGroupPerson } from './components/person/personGroupPerson.component';
import { default as Nav } from './components/nav/nav.component';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <div className='app-body'>
          <div className='app-nav-container'>
            <Nav />
          </div>
          <div className='app-contents'>
            <div className="App-intro">
              <Switch>
                <Route exact={true} path='/' component={PersonGroups} />
                <Route path='/personGroups' component={PersonGroups} />
                <Route path='/personGroup/:id' component={PersonGroup} />
                <Route path='/personGroupPerson/:id' component={PersonGroupPerson} />
              </Switch>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
