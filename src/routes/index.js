import Index from "../pages/admin/dashboard";
import List from "../pages/admin/products/List";
import Login from "../pages/Login";

// 公共路由
export const mainRoute = [
    {
        path:"/login",
        component:Login
    }
]

// 权限路由
export const adminRoute = [
    {
        path:"/admin/dashboard",
        component:Index,
        title:"看板"
    },
    {
        path:"/admin/product",
        component:List,
        exact:true,
        title:"商品"
    }
]