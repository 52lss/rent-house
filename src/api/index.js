import { login, userInfo } from '@/api/user.js'
export const loginAPI = login
export const userInfoAPI = userInfo
// 将play页面所有的按需导出的引进来，在按需暴露出去(不包含默认导出的)
// export * from './user.js'
