import React from 'react'
import { iconItem, IconItem } from '../../../../component/iconItem'
import styles from './styles.module.css'
interface IMainPageProps {
  title?: string
  subtitle?: string
  iconItemList?: iconItem[]
}
export default class MainPage extends React.Component<IMainPageProps> {
  render() {
    const { title, subtitle, iconItemList } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.iconContainer}>
          {iconItemList?.map((item, idx) => (
            <IconItem {...item} key={idx}></IconItem>
          ))}
        </div>
      </div>
    )
  }
}
