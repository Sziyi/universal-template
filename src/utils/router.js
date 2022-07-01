// 获取所有的非一级路由数据
const getChildrenRoutes = (routes) => {
  // console.log('16', routes)
  const result = []
  routes.forEach((item) => {
    if (item.children && item.children.length > 0) {
      result.push(...item.children)
    }
  })
  //   console.log(result)
  return result
}
// 获取所有的一级数据
export const filterRouters = (routes) => {
  // childrenRouters 所有的子路由
  const childrenRoutes = getChildrenRoutes(routes)
  //   routers 完整的路由 16 数据
  return routes.filter((route) => {
    // console.log(route)
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

// 检测空对象 以及 检测空数据 如果为空返回true
const isNull = (data) => {
  // console.log(data)
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

// 将所有的一级路由数据处理成菜单数据
export const generateMenus = (routes) => {
  const result = []
  routes.forEach((item) => {
    if (isNull(item.meta) && isNull(item.children)) return
    // console.log(item)
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }

    // 获取三条数据的path路径
    const routePath = item.path
    // console.log(routePath) // /  /user /article

    let route = result.find((item) => item.path === routePath)
    // console.log(route)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (item.meta.title && item.meta.icon) {
        result.push(route)
      }
    }

    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path))
    }
    console.log(result)
  })
}
