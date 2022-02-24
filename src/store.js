import React,{ createContext, useState, useReducer } from "react";
import myReducer from "./myReducer";
const AppContext = createContext()
const { Provider } = AppContext


function Reducer(state,action){
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

    const [books, dispatch] = useReducer(Reducer,{
        arrList:[],
        count:1
    })

    const addAction = ()=>{
        dispatch({
            type:"COUNT_ADD",
        })
    }

    const { booksList, addMyReducer,addCustomMyReducer } = myReducer()
    return(
        <Provider value={{list,setList,addMyReducer,booksList,books,addAction,addCustomMyReducer}}>
            {props.children}
        </Provider>
    )
}
export default AppContext





