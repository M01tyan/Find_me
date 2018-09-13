import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sr from './ScrollReveal'
import CareerImgPc from './images/career_row.png'
import CareerImgSp from './images/career_column.png'

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
          <img src={CareerImgPc} className="career-img-pc" />
          <img src={CareerImgSp} className="career-img-sp" />
        </div>
  	  </div>
  	)
  }
}
