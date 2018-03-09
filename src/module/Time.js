import React,{ Component } from 'react';
class Time extends Component{
	constructor(){
		super()
		this.state = {
				time:''
			}
			
		}
		componentWillMount(){
			   this.time()
		}
	render(){
		return (<div className="Time">
				当前用户：{this.props.type} | 时间：{this.state.time}
				<span onClick={this.handleZhuX.bind(this)} className="queat">注销</span>
			</div>)
	}
	time(){
		let _this = this;
		setInterval(function(){
			_this.setState({
				time:new Date().toString().slice(0,24)
			})
		},1000)
	}
	handleZhuX(){
		window.location='/login'
	}
}
export default Time