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
    return (
      <div className={styles.container}>
        {title?.map((item, idx) => {
          const { level, titleText } = item
          const style = {
            marginLeft: `${level * 20}px`,
            fontSize: `${24 - level * 4}px`,
            lineHeight: '30px'
          }
          return <div style={style} key={idx}>{titleText}</div>
        })}
      </div>
    )
  }
}
