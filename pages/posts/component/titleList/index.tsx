import React from 'react'
import styles from './styles.module.css'

interface ITitleListProps {
  title?: {
    level: number
    titleText: string
  }[]
}
export default class TitleList extends React.Component<ITitleListProps> {
  render() {
    const { title = [] } = this.props
    if (!title || !title.length) {
      return <></>
    }
    return (
      <div className={styles.container}>
        {title?.map((item, idx) => {
          const { level, titleText } = item
          const style = {
            marginLeft: `${level * 20}px`,
            fontSize: `${20 - level * 4}px`
          }
          return (
            <div style={style} key={idx} className={styles.title}>
              {titleText}
            </div>
          )
        })}
      </div>
    )
  }
}
