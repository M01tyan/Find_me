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
import Icon from './images/icon.jpg'

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
      	height: 250,
      },
      state: false
    }
  }

  handleExpandClick() {
    this.setState((previousState, currentprops) => { if(this.state.state == false) return {style: { display: "block"}, changeCard: { height: 540}, state: true}
                    else return {style: {display: "none"}, changeCard: { height: 250}, state: false} });
  }

  render() {
  	return (
  		<Card style={this.state.changeCard} style={styles.card}>
            <div style={styles.cardBase}>
              <CardContent>
                <Avatar src={Icon} style={styles.icon} refs="logo"/>
              </CardContent>
              <CardContent>
                <div style={styles.baseInfo}>
                  <Typography color="textSecondary">
                    {this.props.u_name}
                  </Typography>
                  <Typography color="textSecondary">
                    {this.props.d_name}学部
                  </Typography>
                  <div style={styles.myName}>
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
            <CardActions style={styles.button}>
              <Button size="small" onClick={ () => this.handleExpandClick()}>Show Detail</Button>
            </CardActions>
              <CardContent style={this.state.style}>
                <Typography paragraph style={styles.detail}>
                  <p style={styles.p}>性別:</p><p style={styles.p}>{this.props.gender}</p> 
                </Typography>
                <Typography paragraph style={styles.detail}>
                  <p style={styles.p}>生年月日:</p><p style={styles.p}>{this.props.birthday}</p>
                </Typography>
                <Typography paragraph style={styles.detail}>
                  <p style={styles.p}>卒業年度:</p><p style={styles.p}>{this.props.graduate}</p>
                </Typography>
                <Typography paragraph style={styles.detail}>
                  <p style={styles.p}>出身地:</p><p style={styles.p}>{this.props.birthplace}</p>
                </Typography>
                <Typography paragraph style={styles.detail}>
                  <p style={styles.p}>出身高校:</p><p style={styles.p}>{this.props.highschool}</p>
                </Typography>
                <Typography paragraph style={styles.detail}>
                  <p style={styles.p}>資格:</p><p style={styles.p}>{this.props.licenses}</p>
                </Typography>
                <Typography paragraph style={styles.detail}>
                  <p style={styles.p}>趣味:</p><p style={styles.p}>{this.props.hobby}</p>
                </Typography>
              </CardContent>
          </Card>
  	)
  }
}

const styles = {
	card: {
		width: 500,
		paddingRight: 0,
		display: 'flex',
		flexDirection: 'column',
	},
	cardBase: {
		display: 'flex',
		flexDirection: 'row',
	},
	icon: {
		width: 170,
		height: 170,
		marginTop: 10,
	},
	baseInfo: {
		marginTop: 10,
	},
	myName: {
		marginLeft: 30,
		marginTop: 20,
	},
	button: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
  detail: {
    display: 'flex',
    flexDirection: 'row',
  },
  p: {
    display: 'flex',
    flex: 1,
  }
}