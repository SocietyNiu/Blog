import React from 'react'
import { icons } from '../../constant/icon'

export interface iconItem {
  icon?: string
  url?: string
  scale?: number
}

export class IconItem extends React.Component<iconItem> {
  render() {
    const { icon = '', url, scale = 25 } = this.props

    return (
      <div
        style={{
          paddingRight: '20px'
        }}
      >
        {icon in icons &&
          React.cloneElement(icons[icon], {
            style: { fontSize: `${scale}px` },
            onClick: () => {
              console.log(1)
            }
          })}
      </div>
    )
  }
}
