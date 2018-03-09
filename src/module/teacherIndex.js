import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch,Redirect,NavLink } from 'react-router-dom';
import Bz from './teacher/Bz';
import Xj from './teacher/Xj';
 import Cj from './teacher/Cj';
import Xx from './student/Xx';
import Xy from './student/Xy';
import Tcj from './student/Tcj';
import Tcb from './student/Tcb';

class StudentIndex extends Component{
	constructor(){
		super();
		
	}
	render(){
		return (<div>
				<ul className="nav">
			          <li className="nav-item">
			             <NavLink to="/teacher/bz" activeClassName="likes">班级信息</NavLink>
			          </li>
			          <li className="nav-item">
			             <NavLink to="/teacher/xj" activeClassName="likes">学生信息</NavLink>
			          </li>
			          <li className="nav-item">
			               <NavLink to="/teacher/bj" activeClassName="likes">班级成绩查询</NavLink>
			          </li>
			          <li className="nav-item">
			               <NavLink to="/teacher/xx" activeClassName="likes">信息公告</NavLink>
			          </li>
			          <li className="nav-item">
			               <NavLink to="/teacher/xy" activeClassName="likes">校园新闻</NavLink>
			          </li>
			          <li className="nav-item">
			               <NavLink to="/teacher/tcj" activeClassName="likes">体能测试介绍</NavLink>
			          </li>
			          <li className="nav-item">
			               <NavLink to="/teacher/tcb" activeClassName="likes">体能测试标准</NavLink>
			          </li>
			     </ul>
			     <Switch>
                    <Route path="/teacher/bz"  component = {Bz}></Route>
                     <Route path="/teacher/xj"  component = {Xj}></Route>
                    <Route path="/teacher/bj" component = {Cj}></Route>
                    <Route path="/teacher/xx" component={Xx}></Route>
                    <Route path="/teacher/xy"  component = {Xy}></Route>
                    <Route path="/teacher/tcj" component = {Tcj}></Route>
                    <Route path="/teacher/tcb" component={Tcb}></Route>
                     <Route exact path="/teacher"  component = {Xx}/>
       			 </Switch> 
			</div>)
	}
} 
export default StudentIndex