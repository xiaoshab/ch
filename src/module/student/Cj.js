import React,{ Component } from 'react';
import '../../css/stc.css'
class Cj extends Component{
	constructor(){
		super()
		this.state={
			reports:{sit:'18',leap:'2.00m',fifty:'8.00s',Lung:'3000',height:'170cm',weight:'50kg',
			 thousand:'4.30min',pull:'18',eight:'4.15min', rise:'40',standard:'80',tatal:'90'}
		}
	}

	componentWillMount(){
		
	}
	render(){
		let {sit,leap,fifty,Lung,height,weight,thousand,pull,eight,rise,standard,tatal} =this.state.reports
		return (<div className="Float">
				<h2>体能测试成绩表</h2>
				<div className="left">
					<ul className="M_table">
					<li>坐位体前屈:<span>{sit}</span></li>
					<li>立定跳远:<span>{leap}</span></li>
					<li>50米跑:<span>{fifty}</span></li>
					<li>肺活量:<span>{Lung}</span></li>
					<li>身高:<span>{height}</span></li>
					<li>体重:<span>{weight}</span></li>
					</ul>
				</div>
				<div className="right">
					<ul className="M_table">
						<li>1000米跑:<span>{thousand}</span></li>
						<li>引体向上:<span>{pull}</span></li>
						<li>800米跑:<span>{eight}</span></li>
						<li>仰卧起坐:<span>{rise}</span></li>
						<li>标准分:<span>{standard}</span></li>
						<li>总分:<span>{tatal}</span></li>
					</ul>
				</div>
			</div>)
	}
}
export default Cj