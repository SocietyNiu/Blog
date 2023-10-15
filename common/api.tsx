import {
  databaseResponse,
  getHomeConfigUrl,
  homeConfig,
  homeConfigResponse
} from '../constant/type'
import { safeJsonParse } from './utils'

export const getHomeConfig = () => {
  return new Promise<homeConfig>((resolve, reject) => {
    fetch(getHomeConfigUrl)
      .then((res) => {
        res
          .json()
          .then((data: databaseResponse) => {
            if (data?.state === 0 && data?.data) {
              const homeConfigResponse = data.data
              const homeConfig: homeConfig = {
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
