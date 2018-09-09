import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import sr from './ScrollReveal'
import Facebook from './images/facebook_logo.png'

export default class TodoCard extends Component {
  componentDidMount() {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '150px',
      scale: 1,
      easing: 'ease',
      reset: true,
    }
    sr.reveal(this.refs.todocard, config)
  }

  render() {
    return (
      <div ref="todocard">
        <h2 className="content-title">これまでの制作物</h2>
        <div className="todo-card">
          <div><TodoCardItem image_src={Facebook} title="会津大学アプリケーション" /></div>
          <div><TodoCardItem image_src={Facebook} title="OGCとのIoTプロジェクト" /></div>
          <div><TodoCardItem image_src={Facebook} title="Fime me サイト" /></div>
        </div>
      </div>
    )
  }
}

class TodoCardItem extends Component {
  render() {
    return (
      <div className="todo-card-item" ref="todocard">
        <a href="" className="todo-card-link" >
          <Card className="card">
            <CardContent className="item">
              <Typography>
                <img src={this.props.image_src} className="image" />
              </Typography>
              <Typography className="title">
                 {this.props.title}
              </Typography>
            </CardContent>
          </Card>
        </a>
      </div>
    )
  }
}
