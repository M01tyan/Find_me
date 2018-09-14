import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import sr from './ScrollReveal'
import Icon from './images/icon.jpg'
import Facebook from './images/facebook_logo.png'
import Github from './images/github_logo.png'

export default class BaseInfo extends Component {
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

  constructor(props) {
    super(props)
    this.state = {
      style: {
        display: "none"
      },
      changeCard: {
      	height: 500,
      },
      state: false,
      text: "Show Detail",
    }
  }

  handleExpandClick() {
    this.setState((previousState, currentprops) => { if(this.state.state == false) return {style: { display: "block"}, changeCard: { height: 540}, state: true, text: "Close Detail"}
                    else return {style: {display: "none"}, changeCard: { height: 250}, state: false, text: "Show Detail"} });
  }

  render() {
  	return (
      <div className="card">
    		<Card className="base-info">
        	<div className="card-base">
            <CardContent>
              <Avatar src={Icon} className="icon" refs="logo"/>
            </CardContent>
            <CardContent>
            	<div className="base-info">
                <div className="university">
                  <Typography color="textSecondary">
                  	{this.props.u_name}
                  </Typography>
                  <Typography color="textSecondary">
                    {this.props.d_name}学部
                  </Typography>
                </div>
                <div className="my-name">
                  <Typography variant="headline">
                    {this.props.name}
                  </Typography>
                  <Typography color="textSecondary">
                    Maeda&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kanta
                  </Typography>
                </div>
                <br/>
                <div className="access">
                  <Typography color="textSecondary">
                    Email: s1240236@u-aizu.ac.jp
                  </Typography>
                </div>
              </div>
            </CardContent>
          </div>
          {/*
          <CardActions className="detail-button">
            <Button size="small" onClick={ () => this.handleExpandClick()}>{this.state.text}</Button>
          </CardActions>
          <CardContent style={this.state.style}>
            <p className="detail-item">性別:</p><p className="detail-item">{this.props.gender}</p>
            <p className="detail-item">生年月日:</p><p className="detail-item">{this.props.birthday}</p>
            <p className="detail-item">卒業年度:</p><p className="detail-item">{this.props.graduate}年</p>
            <p className="detail-item">出身地:</p><p className="detail-item">{this.props.birthplace}</p>
            <p className="detail-item">出身高校:</p><p className="detail-item">{this.props.highschool}</p>
            <p className="detail-item">資格:</p><p className="detail-item">{this.props.licenses}</p>
            <p className="detail-item">趣味:</p><p className="detail-item">{this.props.hobby}</p>
          </CardContent>
        */}
        </Card>
        <div className="card-logo" ref="logo">
          <a href="https://www.facebook.com/M01tyan">
            <img src={Facebook} className="logo-facebook" />
          </a>
          <a href="https://github.com/M01tyan">
            <img src={Github} className="logo-github" />
          </a>
        </div>
      </div>
  	)
  }
}
