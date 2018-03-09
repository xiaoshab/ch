import React,{ Component } from 'react';
import '../../css/stz.css'
class Gz extends Component{
	constructor(){
		super()
		this.state={
			msgs:[{StudentId:1001201101,name:'张三',sex:'男',departments:'计算机科学与信息',
  					IDcaer:'52020319941123504X',professional:'计算机科学与信息技术',date:'1994-11-23',
					Class:'计算机（本科3班）',phone:'13312390110'
					},
					{StudentId:1001201102,name:'李兰',sex:'女',departments:'计算机科学与信息',
  					IDcaer:'52020319951123504X',professional:'计算机科学与信息技术',date:'1995-11-23',
						Class:'计算机（本科3班）',phone:'13312390110'
					},
					{StudentId:1001201103,name:'张三',sex:'男',departments:'计算机科学与信息',
  					IDcaer:'52020319941123504X',professional:'计算机科学与信息技术',date:'1994-11-23',
						Class:'计算机（本科3班）',phone:'13312390110'
					},
					{StudentId:1001201104,name:'张三',sex:'男',departments:'计算机科学与信息',
  					IDcaer:'52020319941123504X',professional:'计算机科学与信息技术',date:'1994-11-23',
						Class:'计算机（本科3班）',phone:'13312390110'
					},
					{StudentId:1001201105,name:'张三',sex:'男',departments:'计算机科学与信息',
  					IDcaer:'52020319941123504X',professional:'计算机科学与信息技术',date:'1994-11-23',
						Class:'计算机（本科3班）',phone:'13312390110'
					},
					{StudentId:1001201106,name:'张三',sex:'男',departments:'计算机科学与信息',
  					IDcaer:'52020319941123504X',professional:'计算机科学与信息技术',date:'1994-11-23',
						Class:'计算机（本科3班）',phone:'13312390110'
					},
					{StudentId:1001201107,name:'张三',sex:'男',departments:'计算机科学与信息',
  					IDcaer:'52020319941123504X',professional:'计算机科学与信息技术',date:'1994-11-23',
						Class:'计算机（本科3班）',phone:'13312390110'
					},
					{StudentId:1001201108,name:'张三',sex:'男',departments:'计算机科学与信息',
  					IDcaer:'52020319941123504X',professional:'计算机科学与信息技术',date:'1994-11-23',
						Class:'计算机（本科3班）',phone:'13312390110'
					},
					{StudentId:1001201109,name:'张三',sex:'男',departments:'计算机科学与信息',
  					IDcaer:'52020319941123504X',professional:'计算机科学与信息技术',date:'1994-11-23',
						Class:'计算机（本科3班）',phone:'13312390110'
					},
					{StudentId:1001201110,name:'张三',sex:'男',departments:'计算机科学与信息',
  					IDcaer:'52020319941123504X',professional:'计算机科学与信息技术',date:'1994-11-23',
					Class:'计算机（本科3班）',phone:'13312390110'
					}
				],
				msg:{}
		}
	}
	 componentWillMount(){
	 	let user = localStorage.user;
	 	let msg = {};
	 	for(let i=0;i<this.state.msgs.length;i++){
	 		if(user==this.state.msgs[i].StudentId){
	 			msg = this.state.msgs[i]
	 		}
	 	}
	 	this.setState({
	 		msg:msg
	 	})
	 }
	render(){
		let { StudentId,name,sex,departments,IDcaer,professional,date,Class,phone} = this.state.msg
		return (<div className="Float">
				<ul className="X_table">
					<li>
						<span className="lfet_tab">学号:<span>{StudentId}</span></span>
						<span className="right_tab">姓名:<span>{name}</span></span>
					</li>
					<li>
						<span className="lfet_tab">性别:<span>{sex}</span></span>
						<span className="right_tab">院系:<span>{departments}</span></span>
					</li>
					<li>
						<span className="lfet_tab">身份证:<span>{IDcaer}</span></span>
						<span className="right_tab">专业:<span>{professional}</span></span>
					</li>
					<li>
						<span className="lfet_tab">出生日期:<span>{date}</span></span>
						<span className="right_tab">行政班级:<span>{Class}</span></span>
					</li>
					<li>
						<span className="lfet_tab">联系电话:<span>{phone}</span></span>
						<span className="right_tab"></span>
					</li>
				</ul>
			</div>)
	}
}
export default Gz