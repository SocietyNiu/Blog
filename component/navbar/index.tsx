import React from 'react'
import styles from './styles.module.css'
import LinkItem from './linkItem'

export interface linkItem {
  title: string
  url: string
}
interface INavbarProps {
  title: string
  linkItemList?: linkItem[]
}
export default class Navbar extends React.Component<INavbarProps> {
  render() {
    const { title, linkItemList } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <LinkItem content={title} fontSize={26} isTitle={true}></LinkItem>
        </div>
        <div className={styles.linkItemBar}>
          {linkItemList &&
            linkItemList?.length > 0 &&
            linkItemList.map((linkItem, idx) => (
              <LinkItem
                content={linkItem.title}
                url={linkItem.url}
                isChoose={true}
                fontSize={16}
                key={idx}
              ></LinkItem>
            ))}
        </div>
      </div>
    )
  }
}
