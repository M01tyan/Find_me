import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default class Counter extends Component {
  render() {
    return (
      <div className="container">
        <Card className="card">
          <CardContent>
            <img src="" />
          </CardContent>
          <CardContent>
            <Typography color="textSecondary">
              {this.props.u_name}
            </Typography>
            <Typography color="textSecondary">
              {this.props.d_name}学部
            </Typography>
            <Typography variant="headline" className="myname">
              {this.props.name}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

Counter.propTypes = {
  name: PropTypes.string,
  u_name: PropTypes.string,
  d_name: PropTypes.string,
}
