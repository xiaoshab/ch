import React, { Component } from 'react';
import '../css/login.css';
class Login extends Component{
	constructor(){
		super()
		this.state={
			val:'学生登录',
			users:[1001201101,1001201102,1001201103,1001201104,1001201105,1001201106,1001201107,
			1001201108,1001201109,1001201110],
			teacherusers:['a01','a02','a03'],
			pwds:[123456],
			user:'',
			pwd:'',
			teacher:''
			
		}
	}
	render(){
		return (<div className="Login">
			 <h1>XX学院体能测试信息系统</h1>
			<input type="text" placeholder="请输入用户名" onChange={this.handleUsername.bind(this)} /><br/>
			<input type="password" placeholder="请输入密码" onChange={this.handlePwd.bind(this)} /> 
			<select onChange={this.handleB.bind(this)}>
			<option>学生登录</option>
			<option>教师登录</option>	
			</select><br/>
			<button onClick={this.handleX.bind(this)}>登录</button>
			<span className="mima">忘记密码？</span>
		</div>)
	}
	handleX(){
		let user = Number(this.state.user),
			pwd =	Number(this.state.pwd),
			teacher = this.state.teacher;
		let _user = this.state.users.indexOf(user),
			_pwd = this.state.pwds.indexOf(pwd),
			_teacher = this.state.teacherusers.indexOf(teacher)
		
			if(this.state.val == '学生登录' ){
				if(_user !== -1 && _pwd !== -1){
					// window.location="/student"
			 		 this.props.history.replace('/student')
				}else{
					alert('用户名不存在或密码错误')
				}
				
			}else if(_teacher !== -1 && _pwd !== -1){
					// window.location="/teacher"
			 this.props.history.replace('/teacher')
							
		}else{
			alert('用户名不存在或密码错误')
		}	
		localStorage.user = user?user:'';
		localStorage.history = this.state.val	
	}
	handleB(e){
		this.setState({
			val:e.target.value
		})		
	}
	handleUsername(e){
		this.setState({
			user:e.target.value,
			teacher:e.target.value
		})
	}
	handlePwd(e){
		this.setState({
			pwd:e.target.value
		})
	}

}

export default Login;