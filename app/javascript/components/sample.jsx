import React, { Component } from 'react'
import propTypes from 'prop-types'
import MessageForm from './sample_form'
import $ from 'jquery'

export default class Sample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: this.props.url,
      messages: [],
      isLoading: true
    }
  }

  componentDidMount() {
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      cache: false,
      success: function(messages) {
        this.setState({messages: messages, isLoading: false, url: this.state.url})
      }.bind(this),
      error: function(_xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  }

  handleMessageSubmit(message) {
    $.ajax({
      url: 'http://localhost:3000/messages',
      dataType: 'json',
      type: 'POST',
      data:   message,
      success: function(message) {
        var newMessages = this.state.messages.concat(message)
        this.setState({ messages: newMessages })
      }.bind(this),
      error: function(_xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  }


  render() {
    var MessageItems = this.state.messages.map(function(message) {
      return (
        <MessageItem key={message.id} message={message} />
      )
    })

    if (this.state.isLoading) {
      return (
        <div>ロード中</div>
      )
    } else {
      return (
        <div className="container">
          {MessageItems}
          <MessageForm onMessageSubmit={this.handleMessageSubmit} />
        </div>
      )
    }
  }
}

class MessageItem extends Component {
  handleMessageDelete(message) {
    let delete_url = "/messages/" + message.id
    $.ajax({
      url: delete_url,
      dataType: 'json',
      type: 'DELETE',
      success: function(messages) {
        console.log(messages)
        this.setState({ messages: messages, isLoading: false})
      }.bind(this),
      error: function(_xhr, status, err) {
        console.error(_xhr, status, err.toString())
      }.bind(this)
    })
  }
  render() {
    return (
      <div className="message">
        <h2 className="messageUser">{this.props.message.user}</h2>
        <span>{this.props.message.text}</span>
        <a href={'/sample/' + this.props.message.id}>Show</a>
        <a href={'/sample/' + this.props.message.id + '/edit'}>Edit</a>
        <input type="button" onClick={() => {this.handleMessageDelete(this.props.message)}} value="Delete" />
      </div>
    )
  }
}