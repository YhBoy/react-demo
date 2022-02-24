import React,{ useReducer } from 'react'

function MyReducer(){
    const [ booksList, dispatch ] = useReducer((state,action)=>{
        switch(action.type){
            case "REDUCER_COUNT_ADD":
                return {
                    ...state,
                    reducerCount:state.reducerCount+1
                }
            case "REDUCER_COUNT_ADD_CUSTOM":
                return {
                    ...state,
                    reducerCount:action.paylad
                }
            default:
                return state    
        }
    },{
        reducerList:[],
        reducerCount:1
    })

    const addMyReducer = ()=>{
        dispatch({
            type:"REDUCER_COUNT_ADD"
        })
    }

    const addCustomMyReducer = (value)=>{
        dispatch({
            type:"REDUCER_COUNT_ADD_CUSTOM",
            paylad:value
        })
    }

    return {
        booksList, addMyReducer,addCustomMyReducer
    }
}

export default MyReducer