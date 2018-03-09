import React, { Component } from 'react';
import Head from '../module/Head';
import Time from '../module/Time';
import TeacherIndex from '../module/teacherIndex';
import Footer from '../module/Footer';
class Teacher extends Component{
	constructor(){
		super()
	}
	render(){
		return (<div>
			<Head />
			<marquee>欢迎使用此系统</marquee>
			<Time type="教师" />
			<TeacherIndex />
			<Footer />
		</div>)
	}
}
export default Teacher;