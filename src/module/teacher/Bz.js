import React,{ Component } from 'react';
import '../../css/teacherIndex.css';
class Bz extends Component{
	constructor(){
		super()
		this.state={
			classlist:[
						{departments:'计算机科学与信息',professional:'计算机科学与信息技术',name:'xx系xx班',amoun:'50'},
						{departments:'计算机科学与信息',professional:'计算机科学与信息技术',name:'xx系xx班',amoun:'50'},
						{departments:'计算机科学与信息',professional:'计算机科学与信息技术',name:'xx系xx班',amoun:'50'},
						{departments:'计算机科学与信息',professional:'计算机科学与信息技术',name:'xx系xx班',amoun:'50'},
						{departments:'计算机科学与信息',professional:'计算机科学与信息技术',name:'xx系xx班',amoun:'50'},
						{departments:'计算机科学与信息',professional:'计算机科学与信息技术',name:'xx系xx班',amoun:'50'},
						{departments:'计算机科学与信息',professional:'计算机科学与信息技术',name:'xx系xx班',amoun:'50'},
						{departments:'计算机科学与信息',professional:'计算机科学与信息技术',name:'xx系xx班',amoun:'50'},
						{departments:'计算机科学与信息',professional:'计算机科学与信息技术',name:'xx系xx班',amoun:'50'}
						],
		}
	}
	render(){
		let classlist = this.state.classlist.map(function(ele,idx){
			 return <ul className="classlists" key={idx}>
					<li>{ele.departments}</li>
					<li>{ele.professional}</li>
					<li>{ele.name}</li>
					<li>{ele.amoun}</li>
				</ul>

		})
		return (<div className="Float">
				<ul className="classlists">
					<li>学院</li>
					<li>系别</li>
					<li>班级名</li>
					<li>班级人数</li>
				</ul>
				{classlist}
			</div>)
	}
}

export default Bz