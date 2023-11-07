import { iconItem } from '../component/iconItem'
import { linkItem } from '../component/navbar'

export const getHomeConfigUrl = '/api/get_home_config'
export const getPostUrl = '/api/get_post'
export interface DatabaseResponse {
  state: number
  message: string
  data?: HomeConfigResponse | PostResponse
}

export interface HomeConfigResponse {
  site_name?: string
  main_page?: string
  navigate_bar?: string
}

export interface HomeConfig {
  site_name?: string
  main_page?: {
    title?: string
    subtitle?: string
    icon_list?: iconItem[]
  }
  navigate_bar?: linkItem[]
}

export interface PostResponse {
  _id?: number
  title?: string
  content?: string
  time?: number
}
