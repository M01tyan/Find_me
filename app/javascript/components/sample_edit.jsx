import React, { Component } from 'react'
import propTypes from 'prop-types'
import $ from 'jquery'

export default class SampleEdit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			url: this.props.url,
			user: '',
			text: '',
			id: '',
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
		var id = this.state.id
		if(!user || !text) {
			return;
		}
		this.handleMessageSubmit({ user: user, text: text, id: id})
		this.setState({user: '', text: ''})
		console.log("form success")
	}
	handleMessageSubmit(message) {
		$.ajax({
	      url: this.state.url,
	      dataType: 'json',
	      type: 'PATCH',
	      data:   message,
	      success: function(message) {
	        this.setState({ user: message.user, text: message.text, id: message.id})
	      }.bind(this),
	      error: function(_xhr, status, err) {
	        console.error(this.props.url, status, err.toString())
	      }.bind(this)
	    })
	}
	componentDidMount() {
	    $.ajax({
	      url: this.state.url,
	      dataType: 'json',
	      success: function(messages) {
	        this.setState({user: messages.user, text: messages.text, id: messages.id, url: this.state.url})
	        console.log("success")
	      }.bind(this),
	      error: function(_xhr, status, err) {
	        console.error(this.props.url, status, err.toString())
	      }.bind(this)
	    })
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