import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div style={styles.header}>
				<h1 style={styles.logo}>Find me</h1>
				<div style={styles.links}>
					<h2 style={styles.h2}>Home</h2>
					<h2 style={styles.h2}>訪問企業一覧</h2>
				</div>
			</div>
		)
	}
}

const styles = {
	header: {
		backgroundColor: '#fff',
		padding: 15,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	logo: {
		color: '#dc143c',
	},
	links: {
		display: 'flex',
		flexDirection: 'row',
	},
	h2: {
		marginRight: 20,
		color: '#dc143c',
	},
}