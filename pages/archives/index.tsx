import React from 'react'
import { getArchives, getHomeConfig } from '../../common/api'
import { Posts } from '../posts'
import { HomeConfig, postUrl } from '../../constant/type'
import Navbar from '../../component/navbar'
import styles from './styles.module.css'
import { transformDate2String } from '../../common/utils'
import Waiting from '../../component/waiting'

interface IArchivesListState {
  archive?: Posts[]
  homeConfig?: HomeConfig
}
export default class ArchivesList extends React.Component<
  {},
  IArchivesListState
> {
  constructor(props: {}) {
    super(props)

    this.state = {
      archive: undefined,
      homeConfig: undefined
    }
  }
  componentDidMount() {
    getHomeConfig().then((res) => {
      this.setState({
        homeConfig: res
      })
    })
    getArchives().then((res) => {
      this.setState({
        archive: res
      })
    })
  }
  render() {
    const { archive, homeConfig = {} } = this.state
    if (!archive || !homeConfig) {
      return <Waiting></Waiting>
    }
    const { site_name = '', navigate_bar } = homeConfig

    return (
      <div>
        {homeConfig && <Navbar title={site_name} linkItemList={navigate_bar} />}
        <div className={styles.container}>
          {archive &&
            archive.map((item, idx) => {
              return (
                <a
                  className={styles.item}
                  href={`${postUrl}?_id=${item._id}`}
                  key={idx}
                >
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.time}>
                    {transformDate2String(item.time, 'date')}
                  </div>
                </a>
              )
            })}
        </div>
      </div>
    )
  }
}
