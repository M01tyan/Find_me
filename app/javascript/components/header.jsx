import React, { Component } from 'react'
import Findme from './images/Find_me_logo_header.png'

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<a href="/"><img src={Findme} className="header-logo" /></a>
				<div className="header-links">
					<a href="/" className="link">Home</a>
					<a href="" className="link">訪問企業一覧</a>
					<a href="/about/show" className="link">このサイトについて</a>
				</div>
			</div>
		)
	}
}