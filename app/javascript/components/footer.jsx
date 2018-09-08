import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div style={styles.footer}>
        <h3 style={styles.logo}>Find me</h3>
        <a href="#skill" style={styles.links}>基本情報</a>
        <a href="#skill" style={styles.links}>これまでの制作物</a>
        <a href="#skill" style={styles.links}>プログラミングレベル</a>
        <a href="#skill" style={styles.links}>これまでの経歴</a>
        <a href="#skill" style={styles.links}>将来のキャリア像</a>
        <a href="#test" style={styles.links}>自己PR</a>
			</div>
		)
	}
}

const styles = {
  footer: {
    backgroundColor: '#fff',
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
  },
	logo: {
		color: '#dc143c',
    paddingLeft: '2%',
	},
	links: {
    color: '#dc143c',
    paddingLeft: '2%',
    paddingBottom: 10,
    fontSize: 12,
	},
}
