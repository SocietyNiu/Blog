import {
  DatabaseResponse,
  getHomeConfigUrl,
  HomeConfig,
  getPostUrl,
  HomeConfigResponse,
  PostResponse
} from '../constant/type'
import posts, { Posts } from '../pages/posts'
import { safeJsonParse } from './utils'

export const getHomeConfig = () => {
  return new Promise<HomeConfig>((resolve, reject) => {
    fetch(getHomeConfigUrl)
      .then((res) => {
        res
          .json()
          .then((data: DatabaseResponse) => {
            if (data?.state === 0 && data?.data) {
              const homeConfigResponse = data.data as HomeConfigResponse
              const homeConfig: HomeConfig = {
                site_name: homeConfigResponse.site_name,
                main_page: safeJsonParse(homeConfigResponse?.main_page),
                navigate_bar: safeJsonParse(homeConfigResponse?.navigate_bar)
              }
              resolve(homeConfig)
            } else {
              reject(new Error('Failed to fetch home config data'))
            }
          })
          .catch(() => {
            reject(new Error('Failed to fetch home config data'))
          })
      })
      .catch(() => {
        reject(new Error('Failed to fetch home config data'))
      })
  })
}

export const getPost = () => {
  return new Promise<Posts>((resolve, reject) => {
    fetch(getPostUrl).then((res) => {
      res
        .json()
        .then((data: DatabaseResponse) => {
          if (data?.state === 0 && data?.data) {
            const postResponse = data.data as PostResponse
            const post: Posts = {
              _id: postResponse._id,
              title: postResponse.title,
              time: postResponse.time,
              content: postResponse.content
            }
            resolve(post)
          } else {
            reject(new Error('Failed to fetch post data'))
          }
        })
        .catch(() => {
          reject(new Error('Failed to fetch post data'))
        })
    })
  })
}
