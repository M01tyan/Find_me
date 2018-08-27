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
            <img src="https://raw.githubusercontent.com/M01tyan/Find_me/master/app/assets/images/icon.jpg" className="icon" />
          </CardContent>
          <CardContent>
            <div className="detail">
              <Typography color="textSecondary">
                {this.props.u_name}
              </Typography>
              <Typography color="textSecondary">
                {this.props.d_name}学部
              </Typography>
              <Typography variant="headline" className="myname">
                {this.props.name}
              </Typography>
              <br/><br/>
              <Typography color="textSecondary">
                Tel: 080-2725-8866
              </Typography>
              <Typography color="textSecondary">
                Email: kanta01m.tyan@gmail.com
              </Typography>
            </div>
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
