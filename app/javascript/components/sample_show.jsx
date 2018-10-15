import React, { Component } from 'react'
import propTypes from 'prop-types'
import $ from 'jquery'

export default class SampleShow extends Component {
	constructor(props) {
    super(props)
    this.state = {
      url: this.props.url,
      user: '',
      text: '',
      isLoading: true
    }
  }

  componentDidMount() {
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      cache: false,
      success: function(messages) {
        this.setState({user: messages.user, text: messages.text, isLoading: false, url: this.state.url})
      }.bind(this),
      error: function(_xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.user}</h2>
        <span>{this.state.text}</span>
      </div>
    )
  }
}