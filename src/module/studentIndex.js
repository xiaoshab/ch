import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch,Redirect,NavLink } from 'react-router-dom';
import Gz from './student/Gz';
import Cj from './student/Cj';
import Xx from './student/Xx';
import Xy from './student/Xy';
import Tcj from './student/Tcj';
import Tcb from './student/Tcb';


import '../css/student.css'
class StudentIndex extends Component{
	constructor(){
		super();
		
	}
	render(){
		return (<div>
				<ul className="nav">
			          <li className="nav-item">
			             <NavLink to="/student/gz" activeClassName="likes">个人信息</NavLink>
			          </li>
			          <li className="nav-item">
			               <NavLink to="/student/cj" activeClassName="likes">成绩查询</NavLink>
			          </li>
			          <li className="nav-item">
			               <NavLink to="/student/xx" activeClassName="likes">信息公告</NavLink>
			          </li>
			          <li className="nav-item">
			               <NavLink to="/student/xy" activeClassName="likes">校园新闻</NavLink>
			          </li>
			          <li className="nav-item">
			               <NavLink to="/student/tcj" activeClassName="likes">体能测试介绍</NavLink>
			          </li>
			          <li className="nav-item">
			               <NavLink to="/student/tcb" activeClassName="likes">体能测试标准</NavLink>
			          </li>
			     </ul>
			     <Switch>
                    <Route path="/student/gz"  component = {Gz}></Route>
                    <Route path="/student/cj" component = {Cj}></Route>
                    <Route path="/student/xx" component={Xx}></Route>
                    <Route path="/student/xy"  component = {Xy}></Route>
                    <Route path="/student/tcj" component = {Tcj}></Route>
                    <Route path="/student/tcb" component={Tcb}></Route>
                    <Route exact path="/student"  component = {Xx}/>
       			 </Switch> 
			</div>)
	}
} 
export default StudentIndex