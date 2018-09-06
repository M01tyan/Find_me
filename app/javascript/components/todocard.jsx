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
      <div style={styles.todoCard} ref="todocard">
      <a href="/" style={styles.a} >
        <Card style={styles.card}>
          <CardContent style={styles.item}>
            <Typography>
              <img src={this.props.image_src} style={styles.image} />
            </Typography>
            <Typography style={styles.title}>
               {this.props.title}
            </Typography>
          </CardContent>
        </Card>
        </a>
      </div>
    )
  }
}

const styles = {
  todoCard: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  card: {
    marginTop: 50,
    width: 300,
    height: 400
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    display: 'flex',

  },
}