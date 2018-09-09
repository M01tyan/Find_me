import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer">
                <h3 className="footer-logo">Find me</h3>
                <a href="#skill" className="footer-link">基本情報</a>
                <a href="#skill" className="footer-link">これまでの制作物</a>
                <a href="#skill" className="footer-link">プログラミングレベル</a>
                <a href="#skill" className="footer-link">これまでの経歴</a>
                <a href="#skill" className="footer-link">将来のキャリア像</a>
                <a href="#test" className="footer-link">自己PR</a>
			</div>
		)
	}
}