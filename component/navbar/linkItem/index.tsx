import React from 'react'
import styles from './styles.module.css'
interface ILinkItemProps {
  content?: string
  url?: string
  isChoose?: boolean
  isTitle?: boolean
  fontSize?: number
}
export default class LinkItem extends React.Component<ILinkItemProps> {
  render() {
    const { content, url, isChoose, fontSize, isTitle } = this.props
    if (isTitle) {
      return this.renderTitle()
    }
    return (
      <>
        <a
          className={`${styles.button} ${isChoose && styles['button-chosen']}`}
          href={url}
          style={
            fontSize
              ? {
                  fontSize: fontSize
                }
              : undefined
          }
        >
          {content}
        </a>
      </>
    )
  }

  renderTitle() {
    const { content, url, fontSize } = this.props
    return (
      <a
        className={styles.title}
        href={url}
        style={
          fontSize
            ? {
                fontSize: fontSize
              }
            : undefined
        }
      >
        {content}
      </a>
    )
  }
}
