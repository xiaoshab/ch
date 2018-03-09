import React,{ Component } from 'react';
class Bz extends Component{
	constructor(){
		super()
		this.state={
			type:''
		}
	}
	componentWillMount(){
		var type = localStorage.history;
		let types =''
		if(type =="教师登录"){
			types = 'teacher';
		}else{
			types = 'student'
		}
		this.setState({
			type:types
		})
	}
	render(){
		return (<div>
				<h2 className="new_title">我校安全稳定综治工作再获佳绩 
				<span onClick={this.handleBack.bind(this)}>返回</span></h2>
				<p className="new_text">
					近日，从全省校园及周边治安综合治理工作暨2018年春季开学安全工作会议和贵州省教育厅、贵州省综治委校园及周边治安综合治理专项组《关于2017年度学校安全稳定综治工作先进单位和先进个人的情况通报》（黔教安稳发〔2018〕24号）文件获悉，我校在2017年度全省学校安全稳定综合治理目标管理工作考核中，取得了99分的好成绩，与贵州师范学院并列第3名，被贵州省教育厅、贵州省综治委校园及周边治安综合治理专项组评为2017年度学校安全稳定综治工作先进单位。保卫处孙平、陈士文两名同志被评为2017年度全省学校安全教育管理综治工作先进个人。此外，从2018年3月1日全市学校及周边治安综合治理暨市教育专业委员会第一季度联席会议上获悉，我校在2017年度全市学校安全稳定综合治理目标管理工作考核中被确定为优秀等次，详情见《关于2017年学校及周边治安综合治理工作考核情况通报》（六盘水校综通报〔2018〕1号）文件。
       成绩的取得是以广大师生员工的积极参与和支持分不开的，在新的一年里，希望广大师生员工一如既往地关心支持学校安全稳定综治工作，深入动员教职工和广大学生参与安全稳定综治工作，积极推动平安校园建设，不断开创我校安全稳定综治工作新局面。（保卫处供稿）
				</p>
			</div>)
	}
	handleBack(){
		 let history=this.state.type
		 window.location = `/${history}`
	}
}

export default Bz