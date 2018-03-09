import React, { Component } from 'react';
import StudentIndex from '../module/studentIndex';
import Head from '../module/Head';
import Time from '../module/Time';
import Footer from '../module/Footer';
class Student extends Component{
	constructor(){
		super()
	}
	componentWillUnmount(){
		this.setState({
			hide:"none"
		})
	}
	render(){
		return (<div>
			<Head />
			<marquee>欢迎使用此系统</marquee>
			<Time type="学生"/>
			<StudentIndex />
			<Footer />
			</div>)
		}
	}
export default Student;