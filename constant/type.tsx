import { iconItem } from '../component/iconItem'
import { linkItem } from '../component/navbar'

export const getHomeConfigUrl = '/api/get_home_config'

export interface databaseResponse {
  state: number
  message: string
  data?: homeConfigResponse
}

export interface homeConfigResponse {
  site_name?: string
  main_page?: string
  navigate_bar?: string
}

export interface homeConfig {
  site_name?: string
  main_page?: {
    title?: string
    subtitle?: string
    icon_list?: iconItem[]
  }
  navigate_bar?: linkItem[]
}
