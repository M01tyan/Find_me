import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import sr from './ScrollReveal'
import ToDoCard from './todocard'
import BaseInfo from './base_info'
import Skill from './skill'
import History from './history'
import Facebook from './images/facebook_logo.png'
import Github from './images/github_logo.png'

export default class Top extends Component {
  componentDidMount() {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }
    sr.reveal(this.refs.logo, config)
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <BaseInfo name={this.props.name} u_name={this.props.u_name} d_name={this.props.d_name} gender={this.props.gender} birthday={this.props.birthday}
                    graduate={this.props.graduate} birthplace={this.props.birthplace} highschool={this.props.highschool} licenses={this.props.licenses} hobby={this.props.hobby}
          />
          <div style={styles.logo} ref="logo">
            <a href="https://www.facebook.com/profile.php?viewas=100000686899395&privacy_source=timeline_gear_menu">
              <img src={Facebook} style={styles.facebook} />
            </a>
            <a href="https://github.com/M01tyan">
              <img src={Github} style={styles.github} />
            </a>
          </div>
        </div>
        <h2 style={styles.h2}ref="logo">これまでの制作物</h2>
        <div style={styles.todoCard}>
          <ToDoCard image_src={Facebook} title="会津大学アプリケーション" />
          <ToDoCard image_src={Facebook} title="OGCとのIoTプロジェクト" />
          <ToDoCard image_src={Facebook} title="Fime me サイト" />
        </div>
        <Skill />
        <History />
      </div>
    )
  }
}

Counter.propTypes = {
  name: PropTypes.string,
  u_name: PropTypes.string,
  d_name: PropTypes.string,
}

const styles = {
  container: {
    backgroundColor: '#dc143c',
    paddingTop: 100,
    paddinBottom: 100,
    paddinRight: 0,
    paddingLeft: 0,
  },
  card: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  facebook: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  github: {
    width: 35,
    height: 35,
  },
  todoCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  h2: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
    color: '#fff',
  },
}
