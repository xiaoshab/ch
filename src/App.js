import { BrowserRouter as Router, Route, Link,Switch,Redirect} from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Login from './module/login';
import Student from './components/student';
import Teacher from './components/teacher';
import Deatil from './components/Deatil';
class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	        <Switch>
	          <Route path="/login" component={Login}></Route>
	          <Route path="/teacher" component={Teacher}></Route>
	          <Route path="/student" component={Student}></Route>
	           <Route path="/detail" component={Deatil}></Route>
	            <Redirect exact path="/" to="/login" />
	        </Switch>
	      </div>
      </Router>
    );
  }
}

export default App;
