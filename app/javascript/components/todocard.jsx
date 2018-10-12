import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
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
import Findme from './images/Find_me_logo.png'
import ReactLogo from './images/react.png'
import Rails from './images/rails.svg'
import Git from './images/git.png'
import Material from './images/material-ui.png'
import Webpacker from './images/webpack.png'
import Icon from './images/icon.jpg'

const tileData = [
  {
    img: Aizulogo,
    title: 'Image',
    author: 'author',
  },
  {
    img: Monaca,
    title: 'Image',
    author: 'author',
  },
  {
    img: Nifty,
    title: 'Image',
    author: 'author',
  },
  {
    img: Onsen,
    title: 'Image',
    author: 'author',
  },
  {
    img: Html5,
    title: 'Image',
    author: 'author',
  },
  {
    img: Js,
    title: 'Image',
    author: 'author',
  },
]

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
      <div>
      <div ref="todocard">
        <h2 className="content-title">これまでの制作物</h2>
        <div className="todo-card">
          <div className="todo-card-item" ref="todocard">
            <a href="" className="todo-card-link" >
              <Card className="card-item">
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
              <Card className="card-item">
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
                      <img src={Fiware} width="180px" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
          <div className="todo-card-item" ref="todocard">
            <a href="" className="todo-card-link" >
              <Card className="card-item">
                <CardContent className="item">
                  <Typography>
                    <img src={Findme} className="image" style={{width: 180}} />
                  </Typography>
                  <Typography className="title">
                     Find me サイト
                  </Typography>
                  <div className="sub-images">
                    <img src={Rails} width="80px" height="90px" />
                    <img src={ReactLogo} width="150px" height="80px" />
                  </div>
                  <div className="sub-images">
                    <img src={Webpacker} width="100px" height="90px" style={{marginTop: 5}} />
                    <img src={Material} width="80px" height="100px" />
                    <img src={Git} width="70px" height="40px" style={{marginLeft: 5}} />
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>


      <SampleCard title="会津大学アプリケーション"/>
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


class SampleCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      anchorEl: null,
      favorite: 0,
    }
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded})
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  favoriteAdd = () => {
    this.setState({ favorite: this.state.favorite + 1})
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className="sample-card">
        <Card className="card">
          <CardHeader
            action={
              <div>
                <IconButton
                  aria-owns={open ? 'fade-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="fade-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={this.handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={this.handleClose}><a href="https://github.com/M01tyan/U-Aizu">Github</a></MenuItem>
                </Menu>
              </div>
            }
            title={this.props.title}
            subheader="December, 2016 ~ May, 2018"
          />
          <div className="media">
            <GridList cols={1.0} className="gridList">
              {tileData.map(tile => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                </GridListTile>
              ))}
            </GridList>
          </div>
          <CardContent>
            <Typography component="p">
              Monacaプラットフォームを用いたハイブリッドアプリケーション
              Webフロント技術を用いてネイティブアプリケーションのように動作する
            </Typography>
          </CardContent>
          <CardActions className="actions" disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <Badge badgeContent={this.state.favorite} color="primary">
                <FormControlLabel
                  control={
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick={this.favoriteAdd} value="checkedH" />
                  }
                />
              </Badge>
            </IconButton>
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <h2 paragraph>タイトル</h2>
              <Typography paragraph>
                会津大学アプリケーション
              </Typography>
              <h3 paragraph>詳細</h3>
              <Typography paragraph>
                会津大学の施設利用状況を直感的に認識できるアプリケーション
                Monacaプラットフォームを用いたハイブリッドアプリケーションであり、
                iOS, Android, Windowsに対応している。
                施設利用のみならず、出席日数カウントや学食メニューなども機能も追加している。
              </Typography>
              <h3 paragraph>使用技術</h3>
              <Typography paragraph>
                <ul className="develop-tech">
                  <div>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                  </div>
                  <div>
                    <li>Monaca</li>
                    <li>Nifty Cloud(DB)</li>
                    <li>Onsen UI</li>
                  </div>
                </ul>
              </Typography>
              <h3 paragraph>開発期間</h3>
              <Typography>
                3ヶ月
              </Typography>
              <h3 paragraph>開発人数</h3>
              <Typography>
                1人
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}
