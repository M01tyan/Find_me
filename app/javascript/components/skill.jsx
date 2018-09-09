import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sr from './ScrollReveal'
import Star from './images/star.png'
import StarGood from './images/star_good.png'

export default class Skill extends Component {
  componentDidMount() {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
      reset: true,
    }
    sr.reveal(this.refs.skill, config)
  }

  render() {
  	return (
  	  <div ref="skill">
  	  	<h2 className="content-title">プログラミングレベル</h2>
  	  	<ProgSkill key="0" lang="C" period="3" />
  	  	<ProgSkill key="1" lang="Java" period="3" />
  	  	<ProgSkill key="2" lang="JavaScript" period="3" />
  	  	<ProgSkill key="3" lang="HTML/CSS" period="3" />
  	  	<ProgSkill key="4" lang="Python" period="2" />
  	  	<ProgSkill key="5" lang="C++" period="1" />
        <ProgSkill key="6" lang="Ruby on Rails" period="1" />
  	  </div>
  	)
  }
}

class ProgSkill extends Component {
  render() {
    const items = [];
    let j;
    for(j=0; j<this.props.period; j++){
      items.push(<img src={StarGood} />)
    }
    for(let i=j; i<5; i++){
      items.push(<img src={Star} />)
    }
    return (
      <div className="prog">
        <h2 className="skill-item">{this.props.lang}</h2>
        <div className="star">{items}</div>
        <h2 className="skill-item">{this.props.period}年</h2>
      </div>
    )
  }
}
