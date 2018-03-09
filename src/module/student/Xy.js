import React,{ Component } from 'react';
import '../../css/stz.css'
class Xy extends Component{
	constructor(){
		super()
		this.state={
			new:['我校2017-2018学年度第二学期第1次教学工作例会召开',
			'我校安全稳定综治工作再获佳绩',
			'我校安全稳定综治工作再获佳绩',
			'全校党支部书记座谈会召开',
			'校领导春节前夕走访慰问离退休干部',
			'省委第五巡视组向六盘水师范学院党委反馈巡视情况',
			'校领导春节前夕走访慰问离退休干部',,
			'校领导春节前夕走访慰问离退休干部',
			'校领导春节前夕走访慰问离退休干部',
			'校领导春节前夕走访慰问离退休干部',
			'校领导春节前夕走访慰问离退休干部'
			]
		}
	}
	render(){
		let _this = this;
		let newlist = this.state.new.map(function(val,idx){
			return <li onClick={_this.handleNew.bind(_this)} key={idx}>{val}<span>2018-03-05</span></li>
		})
		return (<div className="Float">
				<h2>学院重要新闻动态</h2>
			<ul className="news">	{newlist} </ul>
        
		</div>)
	}
	handleNew(){
		window.location = '/detail'
	} 
}
export default Xy