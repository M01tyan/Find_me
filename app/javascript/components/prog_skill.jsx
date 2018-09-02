import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sr from './ScrollReveal'
import Star from './images/star.png'
import StarGood from './images/star_good.png'

export default class Skill extends Component {
  render() {
    const items = []
    let j
    for(j=0; j<this.props.period; j++){
      items.push(<img src={StarGood} />)
    }
    for(let i=j; i<5; i++){
      items.push(<img src={Star} />)
    }
  	return (
  	  <div style={styles.prog}>
        <h2 style={styles.h2}>{this.props.lang}</h2>
        <div style={styles.star}>
          {items}
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
  star: {
    display: 'flex',
    flexDirection: 'row',
  },
  h2: {
  	color: '#fff',
  },
}