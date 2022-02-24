import React,{ createContext, useState } from "react";
const AppContext = createContext()
const { Provider } = AppContext
export function AppProvider(props){
    const [list ,setList] = useState([{
        id:1,
        name:"tom"
    },{
        id:2,
        name:"jerry"
    }])
    return(
        <Provider value={{list,setList}}>
            {props.children}
        </Provider>
    )
}
export default AppContext





