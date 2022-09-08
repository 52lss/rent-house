import request from '@/utils/request'
// import store from '@/store'
// 用户登录接口
export const login = (username, password) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data: {
      username,
      password
    }
  })
}
// 获取用户信息资料
export const userInfo = () => {
  return request({
    url: '/user',
    headers: {
      // authorization: store.state.user
      authorization: window.localStorage.getItem('TOUTIAO_USER')
    }
  })
}
