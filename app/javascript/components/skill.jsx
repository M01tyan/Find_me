import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sr from './ScrollReveal'
import ProgSkill from './prog_skill'

export default class Skill extends Component {
  componentDidMount() {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }
    sr.reveal(this.refs.skill, config)
  }

  render() {
	return (
	  <div ref="skill">
	  	<h2 style={styles.h2}>プログラミングレベル</h2>
	  	<ProgSkill lang="C" period="3" />
	  	<ProgSkill lang="Java" period="3" />
	  	<ProgSkill lang="JavaScript" period="3" />
	  	<ProgSkill lang="HTML/CSS" period="3" />
	  	<ProgSkill lang="Python" period="1" />
	  	<ProgSkill lang="C++" period="1" />
	  </div>
	)
  }
}

const styles = {
  h2: {
  	color: '#fff',
  	display: 'flex',
  	justifyContent: 'center',
  },
}