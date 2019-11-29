import React from 'react';
import PageEmployeeList from './PageEmployeeList';
import PageEmployee from './PageEmployee';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"


const App = () => (
  <div>
    <h1>Employees</h1> 
    <Router>
    <Switch>
      <Route exact path="/">
        <PageEmployeeList/>
      </Route>
      <Route path="/new">
        <PageEmployee />
      </Route>
    </Switch>
  </Router>
  </div>
)
export default App