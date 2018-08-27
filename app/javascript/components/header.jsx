import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1 className="logo">Find me</h1>
				<div className="links">
					<h2>Home</h2>
					<h2>訪問企業一覧</h2>
				</div>
			</div>
		)
	}
}