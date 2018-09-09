import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1 className="header-logo">Find me</h1>
				<div className="header-links">
					<a href="" className="link">Home</a>
					<a href="" className="link">訪問企業一覧</a>
					<a href="" className="link">このサイトについて</a>
				</div>
			</div>
		)
	}
}