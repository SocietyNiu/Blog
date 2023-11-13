import React from 'react'
import ReactMarkdown from 'react-markdown'

import styles from './styles.module.css'
import { getHomeConfig, getPost } from '../../common/api'
import { HomeConfig } from '../../constant/type'
import Navbar from '../../component/navbar'
import TitleList from './component/titleList'
import { transformDate2String } from '../../common/utils'
import Waiting from '../../component/waiting'

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
      homeConfig: undefined,
      post: undefined
    }
  }
  componentDidMount(): void {
    getHomeConfig().then((res) => {
      this.setState({
        homeConfig: res
      })
    })

    const urlParams = new URLSearchParams(window.location.search)
    const _id = urlParams.get('_id')

    if (_id) {
      getPost(_id).then((res) => {
        this.setState({
          post: res
        })
      })
    }
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
  render() {
    const { homeConfig = undefined, post = undefined } = this.state
    if (!homeConfig || !post) {
      return <Waiting></Waiting>
    }
    const { site_name = '', navigate_bar } = homeConfig
    return (
      <div>
        {homeConfig && <Navbar title={site_name} linkItemList={navigate_bar} />}
        <div className={styles.container}>
          <div className={styles.title}>{post?.title}</div>
          <div className={styles.date} suppressHydrationWarning>
            {transformDate2String(post?.time)}
          </div>
          {}
          <TitleList title={this.transformTitle(post?.content)}></TitleList>
          <div className={styles.content}>
            <ReactMarkdown>{post?.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    )
  }
}
