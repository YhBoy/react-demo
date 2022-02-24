import React,{ useContext, useState } from 'react'
import AppContext from '../../../store'

function Index() {
  const context = useContext(AppContext)
  const [txt,setTxt] = useState("")
  const { setList,list } = context
  console.log(list)
  return (
    <div>
        
        {
          
          list.map((item)=>{
            
            return <div>{item.id}</div>
          })
        }
        <div >看板</div>
        <input placeholder='add' 
          onChange={(e)=>{
              setTxt(e.target.value)
          }}
        />
        <button onClick={()=>{
          const item = 
            {
              id:new Date().getTime(),
              name:txt
            }
            
            setList([item,...list])
        }}>添加</button>
        
    </div>
  )
}

export default Index