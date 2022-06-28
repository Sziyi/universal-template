// 本地存储的数据
export const setItem = (key, value) => {
  if (typeof (value === 'object')) {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

// 获取数据
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

// 删除单个本地存储的数据
export const removeItem = (key) => {
  localStorage.removeItem(key)
}

// 删除本地 所有数据
export const removeAllItem = (key) => {
  window.localStorage.clear()
}
