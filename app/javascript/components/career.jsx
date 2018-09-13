import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sr from './ScrollReveal'
import CareerImg from './images/career_row.png'

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
    const config2 = {
      origin: 'left',
      duration: 1000,
      delay: 800,
      distance: '50px',
      scale: 1,
      easing: 'ease',
      reset: true,
    }
    sr.reveal(this.refs.img, config2)
  }

  render() {
  	return (
  	  <div ref="career">
        <h2 className="content-title">将来のキャリア像</h2>
        <div className="career" ref="img">
          <img src={CareerImg} className="career-img" />
        </div>
  	  </div>
  	)
  }
}


const styles = {
  h2: {
    color: '#fff',
    marginTop: 200,
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 200,
    position: 'relative',
    marginLeft: '10%',

  },
  absolute: {
    position: 'absolute',
    left:490,
  },
  absolute_arrow: {
    position: 'absolute',
    left: 810,
    top: 110,
  }
}
