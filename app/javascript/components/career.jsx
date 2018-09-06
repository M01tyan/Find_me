import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sr from './ScrollReveal'

export default class Career extends Component {
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
    sr.reveal(this.refs.career, config)
  }

  render() {
  	return (
  	  <div ref="career">
        <h2 style={styles.h2}>将来のキャリア像</h2>
  	  </div>
  	)
  }
}


const styles = {
  h2: {
    color: '#fff',
    marginTop: 100,
    display: 'flex',
    justifyContent: 'center',
  },
}