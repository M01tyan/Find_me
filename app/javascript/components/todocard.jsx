import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import sr from './ScrollReveal'

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
      <div className="todo-card" ref="todocard">
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
