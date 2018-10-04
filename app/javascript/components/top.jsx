import React, { Component } from 'react'
import ToDoCard from './todocard'
import BaseInfo from './base_info'
import Skill from './skill'
import History from './history'
import Career from './career'
import SelfPR from './self_PR'

export default class Top extends Component {
  render() {
    return (
      <div className="container">
        <BaseInfo name={this.props.name} u_name={this.props.u_name} d_name={this.props.d_name} gender={this.props.gender} birthday={this.props.birthday}
                  graduate={this.props.graduate} birthplace={this.props.birthplace} highschool={this.props.highschool} licenses={this.props.licenses} hobby={this.props.hobby}
        />
        <ToDoCard />
        <Skill />
        <History />
        <Career />
        <SelfPR />
      </div>
    )
  }
}