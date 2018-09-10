import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import sr from './ScrollReveal'
import Aizulogo from './images/logo2g.jpg'
import Monaca from './images/monaca.jpg'
import Nifty from './images/mobile_backend.jpeg'
import Onsen from './images/onsen_ui.png'
import Html5 from './images/HTML5.png'
import Js from './images/JavaScript-logo.png'
import Ogc from './images/ogc_logo.png'
import Pepper from './images/pepper.jpg'
import Python from './images/python.jpg'
import Mqtt from './images/mqttorg-glow.png'
import Fiware from './images/Fiware.png'

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
          <div className="todo-card-item" ref="todocard">
            <a href="" className="todo-card-link" >
              <Card className="card">
                <CardContent className="item">
                  <Typography>
                    <img src={Aizulogo} className="image" />
                  </Typography>
                  <Typography className="title">
                     会津大学アプリケーション
                  </Typography>
                  <div className="sub-images">
                    <img src={Html5} width="90px" height="90px" />
                    <img src={Monaca} width="90px" height="100px" />
                    <img src={Js} width="90px" height="90px" />
                  </div>
                  <div className="sub-images">
                    <img src={Onsen} width="70px" height="80px" />
                    <img src={Nifty} width="170px" height="80px" />
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
          <div className="todo-card-item" ref="todocard">
            <a href="" className="todo-card-link" >
              <Card className="card">
                <CardContent className="item">
                  <Typography>
                    <img src={Ogc} className="image" style={{width: 180}}/>
                  </Typography>
                  <Typography className="title">
                     OGCとのIoTプロジェクト
                  </Typography>
                  <div className="sub-images">
                    <img src={Pepper} width="120px" height="180px" />
                    <div style={{flexDirection: 'column'}}>
                      <img src={Python} width="90px" height="70px" />
                      <img src={Mqtt} width="150px" />
                      <img src={Fiware} width="180px" style={{paddingLeft: 0}}/>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
          <div className="todo-card-item" ref="todocard">
            <a href="" className="todo-card-link" >
              <Card className="card">
                <CardContent className="item">
                  <Typography>
                    <img src={Ogc} className="image" style={{width: 180}}/>
                  </Typography>
                  <Typography className="title">
                     Find me サイト
                  </Typography>
                  <div className="sub-images">
                    <img src={Pepper} width="120px" height="180px" />
                    <div style={{flexDirection: 'column'}}>
                      <img src={Python} width="90px" height="70px" />
                      <img src={Mqtt} width="150px" />
                      <img src={Fiware} width="180px" style={{paddingLeft: 0}}/>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
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
              <div className="sub-images">
                <img src={Html5} width="90px" height="90px" />
                <img src={Monaca} width="90px" height="100px" />
                <img src={Js} width="90px" height="90px" />
              </div>
              <div className="sub-images">
                <img src={Onsen} width="70px" height="80px" />
                <img src={Nifty} width="170px" height="80px" />
              </div>
            </CardContent>
          </Card>
        </a>
      </div>
    )
  }
}
