import request from '@/utils/request'
export const swiperAPI = () => {
  return request({
    url: '/home/swiper'
  })
}
export const groupsAPI = () => {
  return request({
    url: '/home/groups'
  })
}
export const infoAPI = () => {
  return request({
    url: '/area/info'
  })
}
