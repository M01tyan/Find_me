import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div style={styles.header}>
				<h1 style={styles.logo}>Find me</h1>
				<div style={styles.links}>
					<p style={styles.h2}>Home</p>
					<p style={styles.h2}>訪問企業一覧</p>
				</div>
			</div>
		)
	}
}

const styles = {
	header: {
		backgroundColor: '#fff',
		padding: 0,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		position: 'fixed',
		zIndex: 1,
		opacity: 0.98,
	},
	logo: {
		color: '#dc143c',
		marginTop: 10,
		marginLeft: 10,
	},
	links: {
		display: 'flex',
		flexDirection: 'row',
	},
	h2: {
		marginRight: 10,
		color: '#dc143c',
	},
}
