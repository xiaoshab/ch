import React,{ Component } from 'react';
import '../../css/teacherIndex.css';
class Bz extends Component{
	constructor(){
		super()
		this.state={
			tatallist:[
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						{StudentId:1001201101,name:'张三',professional:'计算机科学与信息技术',classname:'计算机（本科3班）',tatal:'90'},
						],
		}
	}
	render(){
		let classlist = this.state.tatallist.map(function(ele,idx){
			 return <ul className="classlist" key={idx}>
					<li>{ele.StudentId}</li>
					<li>{ele.name}</li>
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
					<li>系别</li>
					<li>班级</li>
					<li>成绩</li>
				</ul>
				{classlist}
				</div>
			</div>)
	}
}

export default Bz