import React,{ Component } from 'react';
import '../../css/teacherIndex.css';
class Bz extends Component{
	constructor(){
		super()
		this.state={
			studentlist:[
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',IDcaer:"52020319941123504X",professional:'计算机科学与信息技',date:'1994-11-23',classname:'计算机（本科3班）',phone:'13312390110',tatal:'90'},
				],
		}
	}
	render(){
		let studentlist = this.state.studentlist.map(function(ele,idx){
			 return <ul className="studentlist" key={idx}>
					<li>{ele.StudentId}</li>
					<li>{ele.name}</li>
					<li>{ele.sex}</li>
					<li>{ele.departments}</li>
					<li>{ele.professional}</li>
					<li>{ele.classname}</li>
					<li>{ele.tatal}</li>
				</ul>

		})
		return (<div className="Float">
					<div className="studentlists">
				<ul className="classlist">
					<li>学号</li>
					<li>姓名</li>
					<li>性别</li>
					<li>学院</li>
					<li>系别</li>
					<li>班级</li>
					<li>成绩</li>
				</ul>
				{studentlist}
			</div>
			</div>)
	}
}

export default Bz