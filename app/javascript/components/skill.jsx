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
  	  	<h2 style={styles.h2}>プログラミングレベル</h2>
  	  	<ProgSkill lang="C" period="3" />
  	  	<ProgSkill lang="Java" period="3" />
  	  	<ProgSkill lang="JavaScript" period="3" />
  	  	<ProgSkill lang="HTML/CSS" period="3" />
  	  	<ProgSkill lang="Python" period="2" />
  	  	<ProgSkill lang="C++" period="1" />
  	  </div>
  	)
  }
}

class ProgSkill extends Component {
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
        <h2 style={styles.item}>{this.props.lang}</h2>
        <div style={styles.star}>
          {items}
        </div>
        <h2 style={styles.item}>{this.props.period}年</h2>
      </div>
    )
  }
}

const styles = {
  h2: {
  	color: '#fff',
  	display: 'flex',
  	justifyContent: 'center',
    marginTop: 100,
  },
  prog: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  star: {
    justifyContent: 'space-around',
  },
  item: {
    color: '#fff',
    flex: 1,
    marginLeft: '10%',
  },
}