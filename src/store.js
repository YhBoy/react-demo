import React,{ createContext, useState, useReducer } from "react";
const AppContext = createContext()
const { Provider } = AppContext

function reducer(state,action){
    switch(action.type){
            case "COUNT_ADD":
                return {
                    ...state,
                    count:state.count+1
                }
            default:
                return state    
    }
}

export function AppProvider(props){

    const [list ,setList] = useState([{
        id:1,
        name:"tom"
    },{
        id:2,
        name:"jerry"
    }])

    const [books, dispatch] = useReducer(reducer,{
        arrList:[],
        count:1
    })

    const addAction = ()=>{
        dispatch({
            type:"COUNT_ADD",
        })
    }

    return(
        <Provider value={{list,setList,addAction,books}}>
            {props.children}
        </Provider>
    )
}
export default AppContext





