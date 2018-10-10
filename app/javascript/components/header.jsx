import React, { Component } from 'react'
import Findme from './images/Find_me_logo_header.png'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {
			top: false,
		}
	}

	toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
	render() {
		return (
			<div className="header">
				<div className="header-button">
					<Button onClick={this.toggleDrawer('top', true)}><ExpandMoreIcon /></Button>
					<Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
	          <div
	            tabIndex={0}
	            role="button"
	            onClick={this.toggleDrawer('top', false)}
	            onKeyDown={this.toggleDrawer('top', false)}
	          >
							<div>
								<List><a href="/" className="link">Home</a></List>
								<List><a href="/about/show" className="link">このサイトについて</a></List>
				        <Divider />
							</div>
	          </div>
	        </Drawer>
				</div>
				<a href="/"><img src={Findme} className="header-logo" /></a>
				<div className="header-links">
					<a href="/" className="link">Home</a>
					<a href="/about/show" className="link">このサイトについて</a>
				</div>
				<div className="header-blank">&nbsp;</div>
			</div>
		)
	}
}
