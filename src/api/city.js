import request from '@/utils/request'
export const cityAPI = (level = 1) => {
  return request({
    url: '/area/city',
    params: { level }
  })
}
/**
 * 获取首页城市信息
 * @params level 获取哪一级的城市，1 表示获取所有城市数据 2 表示城市下区的数据
 * @returns Promise
 */
export const getHotCityAPI = (level = 1) => {
  return request({ url: '/area/hot' })
}
