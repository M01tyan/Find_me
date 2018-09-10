import React, { Component } from 'react'
import Findme from './images/Find_me_logo_header.png'

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<img src={Findme} className="header-logo" />
				<div className="header-links">
					<a href="" className="link">Home</a>
					<a href="" className="link">訪問企業一覧</a>
					<a href="" className="link">このサイトについて</a>
				</div>
			</div>
		)
	}
}