import React from 'react'
import Navbar from '../../component/navbar'
import MainPage from './component/mainPage'
import { getHomeConfig } from '../../common/api'
import { HomeConfig } from '../../constant/type'
import Waiting from '../../component/waiting'

interface IindexState {
  homeConfig?: HomeConfig
}
export default class Home extends React.Component<{}, IindexState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      homeConfig: undefined
    }
  }
  componentDidMount(): void {
    getHomeConfig().then((res) => {
      this.setState({
        homeConfig: res
      })
    })
  }
  render() {
    const { homeConfig = undefined } = this.state
    if (!homeConfig) {
      return <Waiting></Waiting>
    }
    const { site_name = '', main_page, navigate_bar } = homeConfig
    return (
      <div>
        <Navbar title={site_name} linkItemList={navigate_bar} />
        <MainPage
          title={main_page?.title}
          subtitle={main_page?.subtitle}
          iconItemList={main_page?.icon_list}
        ></MainPage>
      </div>
    )
  }
}
