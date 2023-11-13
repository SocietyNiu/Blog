import React from 'react'
import styles from './styles.module.css'

interface IWaitingProps {
  type?: 'waiting'
}
export default class Waiting extends React.Component<IWaitingProps> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.loader}></div>
        <div className={styles.waiting}>Loading...</div>
      </div>
    )
  }
}
