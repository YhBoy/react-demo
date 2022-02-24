# 纯属react demo 练习

# first commit 提交的内容是 使用 useContext 传递变量 并且通过 useState改变
# 在 Dashboard路由和 List路由 都有体现 查看 console.log



# second commit context 搭配 useReducer  使用，并且拆分开 useReducer(简化代码 减少冗余)
# 注意查看 在store中注释的代码 (注释的代码是first  commit 提交的)
# 而且需要注意  useReducer在使用的时候 未拆封和拆分的代码在使用上有所不同
# 一个是 [] (未拆封)  一个是拆分{} 注意查看代码





# 需要在最外层 
# const AppContext = createContext()
# const { Provider } = AppContext
# <Provider>
# </Provider>

# 且在组件内部 导入 import AppContext from '../../../store'
#    const context = useContext(AppContext)
#  const { setList,list,addAction,books,booksList,addMyReducer,addCustomMyReducer } = context


