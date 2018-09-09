import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sr from './ScrollReveal'
import Arrow from './images/right-arrow.png'

export default class History extends Component {
  componentDidMount() {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
      reset: true,
    }
    sr.reveal(this.refs.history, config)
  }

  render() {
  	return (
  	  <div ref="history">
        <h2 className="content-title">これまでの経歴</h2>
        <HistoryItems text="1998年1月1日福岡県福岡市で誕生" />
        <HistoryItems text="3歳~10歳までピアノを習う" />
        <HistoryItems text="小学3年生~5年生まで英会話を習う" />
        <HistoryItems text="中学生から陸上競技を始め部員100名ほどのキャプテンに選出" />
        <HistoryItems text="スポーツ推薦で熊本国府高等学校に入学" />
        <HistoryItems text="高校2年生でマネージャーに転向" />
        <HistoryItems text="高校3年生から受験勉強を始め現役で会津大学に入学" />
        <HistoryItems text="大学1年生の夏からHTML/CSS/JavaScriptを独学で学ぶ" />
        <HistoryItems text="大学1年生の冬にMonacaでのアプリケーション開発を始める" />
        <HistoryItems text="大学2年生の冬に友人とUnityでのボードゲーム開発を行う" />
        <HistoryItems text="大学3年生の春からOGCとの共同IoTプロジェクトに参加" />
        <HistoryItems text="会津てらこやネットワークに参加し、ボランティア活動を行う" />
        <HistoryItems text="大学3年生の6月に逆求人イベントに参加、就職活動を開始" />
        <HistoryItems text="パソナテック、GAテクノロジーズ、イプロス、NTTドコモのインターンに参加" />
        <HistoryItems text="2018年8月27日 Find me開発開始" />
        <HistoryItems text="2018年月日 Find meサービス開始" />
  	  </div>
  	)
  }
}

class HistoryItems extends Component {
  componentDidMount() {
    const config = {
      origin: 'left',
      duration: 1000,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
      reset: true,
    }
    sr.reveal(this.refs.history_item, config)
  }
  render() {
    return (
      <div className="arrow" ref="history_item">
        <img src={Arrow} />
        <p>{this.props.text}</p>
      </div>
    )
  }
}