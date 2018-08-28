import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import sr from './ScrollReveal'

export default class Counter extends Component {
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
      <div className="container">
        <div className="container-card">
          <Card className="card">
            <div className="card-base">
              <CardContent>
                <Avatar src="https://raw.githubusercontent.com/M01tyan/Find_me/master/app/assets/images/icon.jpg" className="icon" />
              </CardContent>
              <CardContent>
                <div className="detail">
                  <Typography color="textSecondary">
                    {this.props.u_name}
                  </Typography>
                  <Typography color="textSecondary">
                    {this.props.d_name}学部
                  </Typography>
                  <div className="myname">
                    <Typography variant="headline">
                      {this.props.name}
                    </Typography>
                    <Typography color="textSecondary">
                      Maeda&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kanta
                    </Typography>
                  </div>
                  <br/>
                  <Typography color="textSecondary">
                    Tel: 080-2725-8866
                  </Typography>
                  <Typography color="textSecondary">
                    Email: kanta01m.tyan@gmail.com
                  </Typography>
                </div>
              </CardContent>
            </div>
            <CardActions className="button">
                <Button size="small">Show Detail</Button>
              </CardActions>
            <div className="card-detail">
              <div className="item">
                <Typography>
                  性別
                </Typography>
                <Typography>
                  {this.props.gender}
                </Typography>
              </div>
              <div className="item">
                <Typography>
                  生年月日
                </Typography>
                <Typography>
                  {this.props.birthday}
                </Typography>
              </div>
            </div>
          </Card>
          <div className="logo" ref="logo">
            <img src="https://raw.githubusercontent.com/M01tyan/Find_me/master/app/assets/images/facebook_logo.png" className="facebook" />
            <img src="https://raw.githubusercontent.com/M01tyan/Find_me/master/app/assets/images/github_logo.png" className="github" />
          </div>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  name: PropTypes.string,
  u_name: PropTypes.string,
  d_name: PropTypes.string,
}
