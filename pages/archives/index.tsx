import React from 'react'
import { getArchives, getHomeConfig } from '../../common/api'
import { Posts } from '../posts'
import { HomeConfig, postUrl } from '../../constant/type'
import Navbar from '../../component/navbar'
import styles from './styles.module.css'
import { transformDate2String, transformDate2Year } from '../../common/utils'
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
      const archive = res.sort((a, b) => {
        if (a.time && b.time) {
          return b.time - a.time
        }
        return 0
      })
      this.setState({
        archive: archive
      })
    })
  }
  render() {
    const { archive, homeConfig = {} } = this.state
    if (!archive || !homeConfig) {
      return <Waiting></Waiting>
    }
    const { site_name = '', navigate_bar } = homeConfig
    const years = new Set()
    return (
      <div>
        {homeConfig && <Navbar title={site_name} linkItemList={navigate_bar} />}
        <div className={styles.container}>
          {archive &&
            archive.map((item, idx) => {
              let year = transformDate2Year(item.time)
              if (years.has(year)) {
                year = undefined
              } else {
                years.add(year)
              }
              return (
                <div key={idx}>
                  {year && <div className={styles.year}>{year}</div>}
                  <a
                    className={styles.item}
                    href={`${postUrl}?_id=${item._id}`}
                  >
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.time}>
                      {transformDate2String(item.time, 'date')}
                    </div>
                  </a>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}
