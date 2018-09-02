import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sr from './ScrollReveal'

export default class Skill extends Component {
  render() {
	return (
	  <div style={styles.prog}>
      <div>
        <h2 style={styles.h2}>{this.props.lang}</h2>
      </div>
      <h2 style={styles.h2}>{this.props.period}年</h2>
	  </div>
	)
  }
}

const styles = {
  prog: {
  	display: 'flex',
  	flexDirection: 'row',
  	justifyContent: 'space-around',
  },
  h2: {
  	color: '#fff',
  },
}