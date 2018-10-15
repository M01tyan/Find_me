import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class SampleForm extends Component {
	constructor() {
		super()
		this.state = {
			user: '',
			text: '',
		}
	}
	handleChange = name => event => {
	    this.setState({
	      [name]: event.target.value,
	    })
	}
	handleSubmit = event => {
		//event.preventDefalut();
		console.log("form ok")
		var user = this.state.user
		var text = this.state.text
		if(!user || !text) {
			return;
		}
		this.props.onMessageSubmit({ user: user, text: text })
		this.setState({user: '', text: ''})
		console.log("form success")
	}

	render() {
		return (
			<form className="commentForm">
	          <input type="text" placeholder="Yousr name" onChange={this.handleChange('user')} value={this.state.user} />
	          <input type="text" placeholder="Message" onChange={this.handleChange('text')} value={this.state.text} />
	          <input type="submit" value="Post" onClick={this.handleSubmit} />
	        </form>
		)
	}
}