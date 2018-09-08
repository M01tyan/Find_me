import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sr from './ScrollReveal'
import Career1 from './images/career1.png'
import Plus from './images/plus.png'
import Career2 from './images/career2.png'
import Arrow from './images/arrow_right.png'
import Career3 from './images/career3.png'

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
        <h2 style={styles.h2}>将来のキャリア像</h2>
        <div style={styles.img} ref="img">
          <img src={Career1} />
          <img src={Plus} width="42" height="42" style={styles.absolute} />
          <img src={Career2} />
          <img src={Arrow} width="42" height="42" style={styles.absolute_arrow} />
          <img src={Career3} />
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
