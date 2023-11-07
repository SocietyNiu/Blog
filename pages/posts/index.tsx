import React from 'react'
import ReactMarkdown from 'react-markdown'

import styles from './styles.module.css'
import { getHomeConfig, getPost } from '../../common/api'
import { HomeConfig } from '../../constant/type'
import Navbar from '../../component/navbar'
import TitleList from './component/titleList'

export interface Posts {
  _id?: number
  title?: string
  content?: string
  time?: number
}
interface IPostState {
  homeConfig?: HomeConfig
  post?: Posts
}
export default class posts extends React.Component<{}, IPostState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      homeConfig: {},
      post: {}
    }
  }
  componentDidMount(): void {
    getHomeConfig().then((res) => {
      this.setState({
        homeConfig: res
      })
    })
    getPost().then((res) => {
      this.setState({
        post: res
      })
    })
  }
  transformTitle(markdown?: string) {
    if (!markdown) return undefined
    const regex = /^(#+)\s+(.*)$/gm
    const titles = []
    let match

    while ((match = regex.exec(markdown))) {
      const level = match[1].length
      const titleText = match[2]
      titles.push({ level, titleText })
    }
    return titles
  }
  transformDate(date?: number) {
    if (!date) return null
    var time = new Date(date)
    var year = time.getFullYear()
    var month = time.getMonth() + 1
    var day = time.getDate()
    var hour = time.getHours()
    var minute = time.getMinutes()
    var second = time.getSeconds()
    return (
      year +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      (day < 10 ? '0' + day : day) +
      ' ' +
      (hour < 10 ? '0' + hour : hour) +
      ':' +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second)
    )
  }
  render() {
    const { homeConfig = {}, post } = this.state
    const { site_name = '', navigate_bar } = homeConfig
    return (
      <div>
        {homeConfig && <Navbar title={site_name} linkItemList={navigate_bar} />}
        <div className={styles.container}>
          <div className={styles.title}>{post?.title}</div>
          <div className={styles.date} suppressHydrationWarning>
            {this.transformDate(post?.time)}
          </div>
          {}
          <TitleList title={this.transformTitle(post?.content)}></TitleList>
          <div className={styles.content}>
            <ReactMarkdown children={post?.content}></ReactMarkdown>
          </div>
        </div>
      </div>
    )
  }
}
