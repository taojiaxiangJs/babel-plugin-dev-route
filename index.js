module.exports = ({ types: t }) => {
  return {
    visitor: {
      Identifier(path) {
        const parentIsIf = t.isIfStatement(path.parentIsIf)
        const isDev_route = path.node.name === 'DEV_ROUTE'
        if (isDev_route && parentIsIf) {
          // 将 Identifier 转化成字符串
          const stringNode = t.stringLiteral('DEV_ROUTE')
          path.replaceWith(stringNode)
        }
      },
      StringLiteral(path) {
        const parentIsIf = t.isIfStatement(path.parentIsIf)
        const isDev_route = path.node.name === 'DEV_ROUTE'
        if (isDev_route && parentIsIf) {
          // 需要控制 prod 下才能移除
          if (Process.env.NODE_ENV === 'production') {
            path.parentPath.remove()
          }
        }
      },
    },
  }
}
