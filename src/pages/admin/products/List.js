import React,{ useContext } from 'react'

import AppContext from '../../../store'


function List() {
  const context = useContext(AppContext)
  console.log(context)
  return (
    <div>List</div>
  )
}

export default List