// 封装本地存储操作模块

// 存储数据
export const setItem = (key, val) => {
  // 先判断是否为对象 如果是转换为字符串格式
  if (typeof val === 'object') {
    JSON.stringify(val)
  }
  window.localStorage.setItem(key, val)
}
// 获取数据
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
// 删除数据
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}
